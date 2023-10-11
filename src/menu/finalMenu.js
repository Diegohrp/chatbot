const { chatStates } = require('../chat/chatStates');

const finalMenu = {
  text: `*¿Qué más quieres hacer?*
Escribe el número de la opción que desees realizar:

1. Hacer otra consulta 🔁
2. Regresar ↩
3. Salir ❌`,
  options: {
    1: { text: chatStates.onMainMenu },
    2: { text: chatStates.onGoBack },
    3: { text: chatStates.onExit },
  },
};

module.exports = { finalMenu };
