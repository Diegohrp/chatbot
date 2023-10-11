const venom = require('venom-bot');
const { Chat } = require('./chat/Chat');
const { chatStates } = require('./chat/chatStates');

async function startBot() {
  console.log('iniciando');
  try {
    const client = await venom.create({ session: 'chat-session' });
    start(client);
  } catch (error) {
    console.error(error);
  }
}

function start(client) {
  let chat = new Chat(client);
  client.onMessage(async (payload) => {
    chat.userPhone = payload.from;
    chat.message = { content: payload.body, fromGroup: payload.isGroupMsg };

    try {
      await chat.replyToUser();
      if (chat.chatState.current.state === chatStates.onExit) {
        chat = new Chat(client);
      }
    } catch (err) {
      console.error(err);
    }
  });
}

startBot();
