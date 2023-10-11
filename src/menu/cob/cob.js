const {
  cobOpt1,
  cobOpt2,
  cobOpt3,
  cobOpt4,
  cobOpt5,
  cobOpt6,
  cobOpt7,
  cobOpt8,
  cobOpt9,
  cobOpt10,
  cobOpt11,
  cobOpt12,
  cobOpt13,
  cobOpt14,
  cobOpt15,
  cobOpt16,
  cobOpt17,
} = require('./options');

const cobranza = {
  text: `Haz elegido el menú de *COBRANZA*

*Escribe el número de la opción que desees consultar*:

1. Aclaración Administrativa De Créditos Fiscales de Seguridad Social 💼📋

2. Aclaración de Opinión de Cumplimiento de Obligaciones en Materia de Seguridad Social 📄✅

3. Aplicación de Notas de Crédito 💳📝

4. Bienes al postor por concepto de Remate 🏡💰

5. Certificación de Pagos No Captados 📜💰🔍

6. Condonación de multas 187/2013 💰🚫
 
7. Convenios: Solicitud de Autorización de Pago a plazos de forma diferida de Créditos Fiscales a favor del IMSS. (RCV) 🤝💰

8. Solicitud de Devolución de Cantidades Enteradas sin Justificación Legal (Modalidad B. Retiro en Cesantía y Vejez) 📄💰🔙

9. Devolución de cuotas patronales de los seguros del IMSS (Modalidad A. Cuotas IMSS) 💰🏢

10. Línea de Captura Modalidad 40 📄💳4️⃣0️⃣

11. Líneas de Captura 📄💳

12. Convenios Solicitud de Autorización de Pago en parcialidades de créditos fiscales a favor del IMSS. (COP) 🤝💰

13. Solicitud de Suspensión al PAE y/o Constitución de Garantía 🛡️📄

14. Restablecimiento Patronal 🏢🔄

15. Solicitud de desbloqueo de Cuentas Bancarias 🏦🔓

16. Solicitud de la Devolución de Bienes 🏦🔄

17. Requisitos para Autodeterminación 📋🤝`,

  options: {
    1: cobOpt1,
    2: cobOpt2,
    3: cobOpt3,
    4: cobOpt4,
    5: cobOpt5,
    6: cobOpt6,
    7: cobOpt7,
    8: cobOpt8,
    9: cobOpt9,
    10: cobOpt10,
    11: cobOpt11,
    12: cobOpt12,
    13: cobOpt13,
    14: cobOpt14,
    15: cobOpt15,
    16: cobOpt16,
    17: cobOpt17,
  },
};
module.exports = { cobranza };
