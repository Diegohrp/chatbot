const {
  pensionOpt1,
  pensionOpt2,
  pensionOpt3,
  pensionOpt4,
  pensionOpt5,
  pensionOpt6,
  pensionOpt7,
  pensionOpt8,
  pensionOpt9,
  pensionOpt10,
  pensionOpt11,
} = require('./options');

const pensions = {
  text: `Haz elegido el menú de *PENSIONES*

*Escribe el número de la opción que desees consultar*:

1. Solicitud de Pensión de Cesantía en Edad Avanzada o vejez 👴👵

2. Pensión por Incapacidad Permanente 🚑👨‍⚕️

3. Pensión por Invalidez ♿🩺

4. Pensión por Orfandad 👦👧

5. Pensión por Viudez Modalidad A. 👩‍⚖️👨‍⚖️🏛️

6. Requisitos para Solicitud de finiquito de Segundas Nupcias 💍📜

7. Solicitud de Pensión de Ascendientes 👨‍🦳👩‍🦳

8. Asignaciones Familiares 👨‍👩‍👦‍👦🏠

9. Pensión por Invalidez (asegurado) ♿🩺👤

10. Pensión por Orfandad Hijo mayor de 16 años Incapacitado 👦🧑‍🦽

11. Solicitud de Pensión de Retiro 🚶‍♂️🛋️💼`,

  options: {
    1: pensionOpt1,
    2: pensionOpt2,
    3: pensionOpt3,
    4: pensionOpt4,
    5: pensionOpt5,
    6: pensionOpt6,
    7: pensionOpt7,
    8: pensionOpt8,
    9: pensionOpt9,
    10: pensionOpt10,
    11: pensionOpt11,
  },
};

module.exports = { pensions };
