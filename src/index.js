const express = require('express');
const { startBot } = require('./chat/index');

const port = 3000;
const app = express();

app.use(express.static(__dirname + '/chat'));

app.get('/chatbot', (req, res, next) => {
  startBot(res);
});

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
