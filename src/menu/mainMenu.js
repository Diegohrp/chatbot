const { audit } = require('./audit/audit');
const { affil } = require('./affil/affil');
const { cobranza } = require('./cob/cob');
const { pensions } = require('./pensions/pensions');
const { chatStates } = require('../chat/chatStates');
const mainMenu = {
  text: `👋 ¡Hola! 👋

🏥 *Bienvenido al chatbot del IMSS Subdelegación Naucalpan* 🏥 
  
Consulta información acerca de los documentos que requieres para realizar algún trámite de tu interés.
  
*¿Qué tipo de trámite deseas realizar?*
  
En el siguiente menú se muestran los tipos de trámites que puedes realizar. Escribe el número de la opción que deseas consultar.
  
  1. Afiliaciones 🤝
  2. Auditoría 🔍
  3. Cobranza 💰
  4. Pensiones 🏦
  5. Salir ❌`,
  options: {
    1: affil,
    2: audit,
    3: cobranza,
    4: pensions,
    5: { text: chatStates.onExit },
  },
};

module.exports = { mainMenu };
