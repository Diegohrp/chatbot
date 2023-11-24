const express = require('express');
const { startBot } = require('./chat/index');

// Cambia el puerto para que utilice la variable de entorno PORT de GCP o 3000 si se ejecuta localmente
const port = process.env.PORT || 3000;
const app = express();

// Sirve archivos estáticos de la carpeta 'public', si decides usarla en el futuro
// app.use(express.static(__dirname + '/public'));

// Ruta raíz que simplemente envía un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido al Chatbot del IMSS. Para interactuar usa la ruta /chatbot');
});

// Ruta para '/chatbot' que inicia la interacción con el bot
app.get('/chatbot', (req, res) => {
  startBot(res);
});

// Configuración para que la aplicación escuche en el puerto correcto
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
