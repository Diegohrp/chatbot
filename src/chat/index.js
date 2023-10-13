const fs = require('fs');
const venom = require('venom-bot');
require('dotenv').config();

const { Chat } = require('./Chat');
const { chatStates } = require('./chatStates');

const htmlResponse = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Escanea el código QR</title>
  </head>
  <body>
    <main
      style="display: flex; flex-direction: column; align-items: center"
    >
      <h2 style="text-align: center">Escanéa el código QR</h2>
      <img
        style="width: 500px; height: 500px; margin-top:20px;"
        alt="Códig QR"
        src="/codigo-qr.png"
      />
    </main>
  </body>
</html>
`;

let client;

async function startBot(res) {
  console.log('Iniciando');
  try {
    if (client) {
      client.close();
    }
    client = await venom.create(
      'chat-session',
      async (base64Qr, asciiQR, attempts, urlCode) => {
        const matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches.length !== 3) {
          console.error('Invalid input string');
          return;
        }

        const response = {
          type: matches[1],
          data: Buffer.from(matches[2], 'base64'),
        };

        fs.writeFile(
          __dirname + '/codigo-qr.png',
          response.data,
          'binary',
          (err) => {
            if (err) {
              console.error(err);
            } else if (attempts === 1) {
              console.log('Código QR guardado como codigo-qr.png');
              res.send(htmlResponse);
            }
          }
        );
      },
      (statusSession, session) => {
        if (statusSession === 'isLogged') {
          res.send('Ya has escaneado el código QR');
        }
      },
      {
        logQR: false,
        puppeteerOptions: {
          args: [
            '--disable-setuid-sandbox',
            '--no-sandbox',
            '--single-process',
            '--no-zygote',
          ],
          executablePath:
            process.env.NODE_ENV === 'production'
              ? process.env.PUPPETEER_EXECUTABLE_PATH
              : puppeteer.executablePath(),
        },
      }
    );

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

module.exports = { startBot };
