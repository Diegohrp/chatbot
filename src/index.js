const express = require('express');
const { startBot } = require('./chat/index');

// Cambio aquí: Usa el puerto proporcionado por la variable de entorno PORT de GCP o 3000 si no se proporciona
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/chat'));

app.get('/chatbot', (req, res, next) => {
  startBot(res);
});

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
