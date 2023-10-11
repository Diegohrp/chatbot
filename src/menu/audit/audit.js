const { chatStates } = require('../../chat/chatStates');
const { auditOpc1, auditOpc2, auditOpc3 } = require('./options');

const audit = {
  text: `Haz elegido el menú de *AUDITORÍA*

*Escribe el número de la opción que desees consultar*:

1. Solicitud de corrección patronal 📝🏢

2. Solicitud de Denuncia del Trab. en contra del patrón afi. al IMSS, afi. Con salario inferior. afil. Fecha, post. 🚨👨‍⚖️
  
3. Dictamen para efectos del Seguro Social 📋🏥
  
4. Regresar ↩
  
5. Salir ❌`,
  options: {
    1: auditOpc1,
    2: auditOpc2,
    3: auditOpc3,
    4: { text: chatStates.onGoBack },
    5: { text: chatStates.onExit },
  },
};

module.exports = { audit };
