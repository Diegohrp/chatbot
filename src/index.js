const express = require('express');
const { startBot } = require('./chat/index');

const port = 3000;
const app = express();
//Para que express pueda servir archivos estáticos, como imágenes
app.use(express.static(__dirname + '/chat'));

//Al ingresar a esta ruta, se cargan los recursos para el chatbot
//Como respuesta se muestra el código QR como imagen
app.get('/chatbot', (req, res, next) => {
  startBot(res);
});

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
