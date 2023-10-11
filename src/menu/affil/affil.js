const { chatStates } = require('../../chat/chatStates');
const {
  affilOpc1,
  affilOpc2,
  affilOpc3,
  affilOpc4,
  affilOpc5,
  affilOpc6,
  affilOpc7,
  affilOpc8,
  affilOpc9,
  affilOpc10,
  affilOpc11,
  affilOpc12,
  affilOpc13,
  affilOpc14,
} = require('./options');

const affil = {
  text: `Haz elegido el menú de *AFILIACIONES*

*Escribe el número de la opción que desees consultar*:

1. Aclaración o Rectificación a los movimientos Afiliatorios ante el IMSS de alta, Reingreso o Modif. De Salario. 🔄📝

2. Incorporación voluntaria de los trabajadores del ámbito urbano al Seguro Social 🏙️👨‍💼
  
3. Asignación o Localización del Número de Seguridad Social 🔢🔍
  
4. Constancia de Aclaración de Semanas Cotizadas 📄🗓️
  
5. Determinación Anual de la Prima en el Seguro de Riesgos de Trabajo. 💼⚠️

6. Escrito patronal de desacuerdo sobre la prima de riesgos de trabajo de tu empresa, ante el IMSS 📝🆘

7. Solicitud de Inscripción en la Continuación Voluntaria en el Régimen Obligatorio (Modalidad 40)  📋❗

8. Solicitud de Incorporación al Seguro de la Salud para la Familia Modalidad 33 🏥👨‍👩‍👧‍👦

9. Incorporación Voluntaria al Régimen Obligatorio del Seguro Social (Patrón Persona física) Modalidad 35 💼🏥

10. Aviso de Modificación por Suspensión o Término de Actividades ante el IMSS 🚫🏢📄

11. Aviso de Modificación al Regitro Patronal 📋🏢

12. Regularización y/o Corrección de tus Datos Personales en el IMSS 🔄📄🏥

13. Solicitud de Constancia de Semanas Reconocidas IMSS-ISSTE 🗓️🏦🏥

14. Solicitud de Constancia de Semanas Reconocidas 🗓️🏥

15. Regresar ↩
  
16. Salir ❌`,

  options: {
    1: affilOpc1,
    2: affilOpc2,
    3: affilOpc3,
    4: affilOpc4,
    5: affilOpc5,
    6: affilOpc6,
    7: affilOpc7,
    8: affilOpc8,
    9: affilOpc9,
    10: affilOpc10,
    11: affilOpc11,
    12: affilOpc12,
    13: affilOpc13,
    14: affilOpc14,
    15: { text: chatStates.onGoBack },
    16: { text: chatStates.onExit },
  },
};

module.exports = { affil };
