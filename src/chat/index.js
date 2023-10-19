const fs = require('fs');
const venom = require('venom-bot');
require('dotenv').config();

const { Chat } = require('./Chat');
const { chatStates } = require('./chatStates');

//html que contiene el código QR en una etiqueta <img>
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
    //Para cerrar adecuadamente el navegador si se recarga la página
    if (client) {
      client.close();
    }
    client = await venom.create(
      'chat-session',
      //Función para exportar el código QR como imagen
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
              //Tiempo de espera para escanear el código
              setTimeout(() => {}, 180000);
            }
          }
        );
      },
      //Función para saber si ya se ha escaneado el QR
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
          executablePath: '/usr/bin/google-chrome-stable',
        },
      }
    );

    start(client);
  } catch (error) {
    console.error(error);
  }
}
//Hashmap que almacena cada una de las instancias "Chat"
//Utiliza como key el número de teléfono del usuario que manda mensaje
const chatInstances = new Map();

function start(client) {
  client.onMessage(async (payload) => {
    const userPhone = payload.from;
    //Si no hay una instancia de "Chat" almacenada que corresponda al número de tel
    //implica que es el inicio de la conversación, se crea la instancia y se guarda en el hashmap
    let chat = chatInstances.get(userPhone);
    if (!chat) {
      chat = new Chat(client);
      chat.userPhone = userPhone;
      chatInstances.set(userPhone, chat);
    }
    //Se asigna el mensaje a la instancia
    chat.message = { content: payload.body, fromGroup: payload.isGroupMsg };

    try {
      await chat.replyToUser();
      if (chat.chatState.current.state === chatStates.onExit) {
        //chat = new Chat(client);
        chatInstances.delete(userPhone);
      }
    } catch (err) {
      console.error(err);
    }
  });
}

module.exports = { startBot };
