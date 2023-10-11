const { chatStates } = require('../../chat/chatStates');

const affilOpc1 = {
  text: `*Aclaración o Rectificación a los Movimientos Afiliatorios ante el IMSS de Alta, Reingreso o Modificación de Salario.*

*Documentos Requeridos*

● Escrito libre. _Original y copia_ ✍️📄🖊️
● Tarjeta de Identificación Patronal. (TIP) _Original_ 💼💳
● En caso de Alta o reingreso, *Aviso de inscripción del trabajador*, con los datos correctos. _Original y dos copias_ 📋✅
● En caso de modificación de salario, *Aviso de modificación de salario del trabajador*, con los datos correctos. _Original y dos copias_ 💵📄
● Constancia expedida por el IMSS del movimiento afiliatorio por aclarar. _Copia_ 📃🔍
● Documentos que comprueben fehacientemente la aclaración o rectificación. _Original y copia._ ✅📄

*Nota*
Los documentos solicitados no deberán contener errores, borraduras, tachaduras o enmendaduras.
En caso de que el patrón o sujeto obligado solicite la certificación de un trabajador no reconocido en su registro patronal, deberá comprobar fehacientemente su petición`,
};

const affilOpc2 = {
  text: `*Incorporación voluntaria de los trabajadores del ámbito urbano al Seguro Social*

*Documentos Requeridos*

● Identificación oficial vigente con fotografía y firma, en original y copia, como puede ser:
  ⚬ Credencial para votar 💳🗳️
  ⚬ Pasaporte ✈️🛂
  ⚬ Cartilla de Servicio Militar 🎖️
  ⚬ Matrícula consular 📜

● Comprobante de domicilio, con antigüedad no mayor a 3 meses de expedición, como puede ser: agua, luz, teléfono, gas. No es necesario que esté a tu nombre. En _Original Y Copia_. 🏠🧾
● Copia certificada del Acta de Nacimiento. _Original Y Copia_ 📜🗓️🎂
● CURP _Original Y Copia_. 🆔📄
● Datos del solicitante o representante legal. 📝👤
● Cuestionario médico proporcionado por el IMSS, llenado por el solicitante y por cada familiar a asegurar, cuando aplique. _Original Y Copia_ 🩺📄
● Por cada persona a asegurar 2 fotografías recientes tamaño infantil 📸
● Comprobante del pago de la anualidad anticipada del aseguramiento, en _Original Y Copia_ 💰📄

*Costo Anual $11,085.77 Vigente a partir del 1 de Febrero de 2020*`,
};
const affilOpc3 = {
  text: `*Asignación o Localización del Número de Seguridad Social*

*Documentos requeridos*

*Para realizar el trámite vía internet necesitas:*
● Clave Única de Registro de Población (CURP). 🆔
● Correo electrónico 📧 

*O si lo deseas solicitar de forma presencial:*
Acude a la subdelegación u Oficina Auxiliar de afiliación y cobranza que te corresponda.
  ● Copia certificada del acta de nacimiento para su cotejo en _original_. 📜🗓️🎂
  ● Identificación oficial vigente. _Original_. 🆔🔍

Si el interesado es extranjero y no cuenta con copia certificada de acta de nacimiento para su cotejo apostillada y en su caso acompañada de la traducción al español, podrá presentar documentación de identidad que lo acredite de acuerdo a su nacionalidad es este caso podrá ser carta de naturalización y/o documento migratorio vigente, emitido por autoridad competente. _Original_

En caso de que el interesado sea menor de 18 años de edad, podrá presentar como identificación alguno de los siguientes documentos:
  ● Certificado oficial de estudios (primaria, secundaria o equivalente, preparatoria o equivalente), constancia del grado de estudios que está cursando, credencial escolar, o en su caso boleta de calificaciones, los cuales deberán incluir fotografía vigente y el número de incorporación al sistema educativo nacional (SEP) 📜🎓
  ● Cédula de Identidad Personal expedida por RENAPO 🆔🏙️
    ⚬ Clave Única de Registro de Población (CURP) _Original_ 🆔
    ⚬ Poder notarial. En caso de que el trámite lo realice tu representante legal, el poder notarial deberá ser expedido por fedatario público (Notario o corredor público). _Original_ 📜👨‍⚖️
  `,
};
const affilOpc4 = {
  text: `*Constancia de Aclaración de Semanas Cotizadas*

*Documentos requeridos*

*En la Subdelegación que corresponda a tu domicilio:*
● Avisos afiliatorios si cuenta con ellos. _Original_ 📋
● Identificación oficial vigente. _Original_; como puede ser:
  ⚬ Credencial para votar 💳🗳️
  ⚬ Pasaporte vigente ✈️🛂
  ⚬ Cartilla de Servicio Militar Nacional 🎖️
  ⚬ Cédula profesional 📄
  ⚬ Matrícula consular 🔠🏢
  ⚬ Si eres extranjero: Tarjeta/Cédula/Carnet de identidad de tu país y forma migratoria FM2 o FM3 emitida por el Instituto Nacional de Migración 🌍🛂
  ⚬ Credencial ADIMSS 💳🏥

● Documento donde conste el Número de Seguridad Social. _Original_. 🔢
● Escrito libre. _Original_; donde indiques:
  ⚬ Tu nombre completo. ✍️
  ⚬ Número de Seguridad Social. 🔢
  ⚬ Domicilio. 🏠📍
  ⚬ Nombre o denominación de los patrones con los que has trabajado. 💼👔
  ⚬ Periodo laborado con cada uno de los patrones. 📅⏳
  ⚬ Entidad federativa en la cual se encuentran los patrones con los que has trabajado 🗺️🏙️
  ⚬ Firma del trabajador 🖊️👤
`,
};
const affilOpc5 = {
  text: `*Determinación Anual de la Prima en el Seguro de Riesgos de Trabajo.*

*Documentos requeridos*

*Por internet*
*http://www.imss.gob.mx/tramites/imss02029*
● La firma digital NPIE o la FIEL.  🔏📄
● Archivo de la Determinación en el SUA (Archivo.DAP) 🗂️💼

*De forma presencial:*
● Tarjeta de Identificación Patronal. _Original_ 💳
● Formato electrónico “Determinación de la Prima en el Seguro de Riesgos de Trabajo”, CLEM-22.doc. _Original y copia._ 📝⚠
● Documento de acreditación expedido por la Secretaria de Trabajo y Previsión Social, relacionado con un sistema de administración y seguridad en el trabajo. 📜👷
● Formato “Relación de casos de riesgo de Trabajo Terminados” CLEM 22 A. _Original y copia._ 📝⚠
● Archivo SRT en USB o CD. 📂💽
`,
};

const affilOpc6 = {
  text: `*Escrito patronal de desacuerdo sobre la prima de riesgos de trabajo de tu empresa, ante el IMSS*

*Documentos requeridos*

● Identificación oficial vigente. _Original y copia_, como puede ser 🆔:
  ⚬ Credencial para votar  💳🗳️
  ⚬ Pasaporte ✈️🛂
  ⚬ Cartilla del Servicio Militar 🎖️
  ⚬ Cédula Profesional 📚📜

● Tarjeta de Identificación Patronal (TIP). _Original y copia_ 💳🏢
● Resolución del Instituto. _Original y copia_ 📜🏛️
● Escrito libre donde manifiestes el desacuerdo de la resolución. _Original y copia_ 📝❌🏛️
● Documentos que sustenten que el motivo del desacuerdo. _Original y copia_ 📄❌🏛️
`,
};

const affilOpc7 = {
  text: `1. Solicitud de Inscripción en la Continuación Voluntaria en el Régimen Obligatorio (Modalidad 40) 📋

2. Solicitud de Inscripción en la Continuación Voluntaria en el Régimen Obligatorio (Modalidad 40): *Cambio de Domicilio* 📋🏡

3. Hacer otra consulta 🔁  

4. Salir ❌`,
  options: {
    1: {
      text: `*Solicitud de Inscripción en la Continuación Voluntaria en el Régimen Obligatorio (Modalidad 40)*

*Requisitos*
    
● Comprobante de Domicilio. _Original y Copia_ 🏡📜
● Identificación Oficial (IFE, INE, Pasaporte, Cédula Profesional). _Original y copia_ 🆔💳
● Escrito Libre solicitando la inscripción en la continuación voluntaria en el régimen obligatorio, con firma autógrafa o huella digital. _Original y Copia_ 📝🤝
● Documento que contenga el número de seguridad social. _Original_ 🔢📜
● Formato C.V.R.O 01. 📄📋
    
En caso de reingreso deberá presentar contrato, comprobante de pago de las cuotas obrero patronales del periodo anterior. _Original y Copia_. 💰🧾🔙
    
*Nota: Únicamente esta modalidad es para aumentar las cotizaciones, sin derecho a servicio médico. Costo en base al último salario cotizado.*`,
    },
    2: {
      text: `*Cambio de Domicilio*

*Requisitos*
    
En caso de cambio de Domicilio, el asegurado cuenta con 30 días naturales contados a partir de la fecha de la baja para tramitar su inscripción en la continuación voluntaria en el régimen obligatorio en Subdelegación del IMSS
    
● Escrito Libre solicitando la inscripción en la continuación voluntaria en el régimen obligatorio, con firma autógrafa o huella digital. _Original y Copia_ 📝🤝
● Documento que contenga el número de seguridad social. _Original_ 🔢📜
● Identificación Oficial (IFE, INE, Pasaporte, Cédula Profesional). _Original y copia_ 🆔💳
● Comprobante de Domicilio. _Original y Copia_ 🏡📜
● Recibo de pago de la cuota obrero patronal correspondiente. (el recibo de pago, deberás presentarlo una vez que se te informe que tu solicitud ha sido aprobada) _Original y Copia_ 💰🧾
    
En caso de reingreso deberá presentar comprobante de pago de las cuotas obrero patronales del periodo anterior. _Original y Copia_ 💰🧾🔙
    
Si con el motivo del incremento legal al salario minimo general del área geográfica que corresponda, el salario base de cotización resulta inferior a aquel que le le corresponda a su nuevo domicilio, de lo contrario, tendrá que realizar su trámite de renovación en la circunscripción en que se haya dado de alta
    
*Nota: Únicamente esta modalidad es para aumentar las cotizaciones, sin derecho a servicio médico. Costo en base al último salario cotizado.*`,
    },
    3: { text: chatStates.onGoBack },
    4: { text: chatStates.onExit },
  },
};

const affilOpc8 = {
  text: `*Solicitud de Incorporación al Seguro de la Salud para la Familia Modalidad 33*

*Documentos Requeridos*

Tabla de Requisitos (Original y Copia)
● *Titular*
  ⚬ Documento de NSS de reingreso o baja. 🔢📜
  ⚬ Acta de Nacimiento 📜👶
  ⚬ Comprobante de domicilio (Teléfono, Predial, agua o luz) del contratante 🏠🧾
  ⚬ Identificación Oficial (IFE o INE) 🆔💳
  ⚬ Clave Única de Registro de Población (CURP) 🔢📄

● *Esposa o Concubina*
  ⚬ Acta de Matrimonio o Solicitar SAV002 en su Unidad de Medicina Familiar ( solo en caso concubinato para demostrar el mismo)  👩‍❤️‍👨📜
  ⚬ Acta de Nacimiento de la esposa o concubina 📜👩
  ⚬ Identificación Oficial (IFE o INE) 🆔💳
  ⚬ Acta de Nacimiento de un hijo de ambos (solo en caso de concubina) 👶📜
  ⚬ Documento de NSS 🔢📜
  ⚬ Clave Única de Registro de Población (CURP) 🔢📄

● *Hijos*
  ⚬ Acta de Nacimiento 📜👶
  ⚬ Mayores de 18 años (Identificación Oficial) 🆔💳
  ⚬ Documento con Número de Seguridad Social 🔢📜

● *Padres*
  ⚬ Acta de Nacimiento 📜👶
  ⚬ Mayores de 18 años (Identificación Oficial) 🆔💳
  ⚬ Documento con Número de Seguridad Social 🔢📜
  ⚬ Clave Única de Registro de Población (CURP) 🔢📄

*TABLA DE PAGOS*
*PAGO ANUAL POR PERSONA (DEL 01/02/2019 AL 31/01/2020)*

*Rango de edad*     *Precio*
*De 0 a 19 años*    $3,900
*De 20 a 29 años*   $4,600
*De 30 a 39 años*   $4,900
*De 40 a 49 años*   $6,800
*De 50 a 59 años*   $7,150
*De 60 a 69 años*   $10,350
*De 70 a 79 años*   $10,750
*De 80 a más años*  $10,800

*Nota:* El servicio se otorga el primer día del mes siguiente a la contratación, *es indispensable que acuda el contratante*, si aplican restricciones, favor de presentar *3 Fotografías tamaño infantil*.
`,
};

const affilOpc9 = {
  text: `*Incorporación Voluntaria al Régimen Obligatorio del Seguro Social (Patrón Persona física) Modalidad 35*

*Documentos requeridos*

● Acta de Nacimiento. _Copia Certificada_ 📜👶
● Clave Única de Registro de Población (CURP). 🔢📜
● Comprobante de domicilio. 🏠📜
● Identificación Oficial (IFE, INE, Pasaporte, Cédula Profesional vigente) 🆔💳
● Alta del IMSS 🏥📄
● Ultimo Pago del IMSS 💰📄
● Cuestionario medico proporcionado por el IMSS, llenado por el solicitante y por cada familiar a asegurar cunado aplique. _Original y Copia._ 🩺📜
● Datos del solicitante o representante legal 📝👤
● Comprobante de pago de la anualidad anticipada. _Original y Copia_ 📄💰🕒
● Si la baja excede de 1 año se aplican restricciones. ⚠️🕒

*Costo: $11,085.77 pesos anual, a partir del 1 de febrero del 2020*

*Nota: Únicamente cotiza para pensión de vejez (65 años)*

*El servicio se otorga el primer día del mes siguiente a la contratación.*
`,
};

const affilOpc10 = {
  text: `*Aviso de Modificación por Suspensión o Término de Actividades ante el IMSS*

*Documentos Requeridos*

● Aviso presentado ante el Servicio de Administración Tributaria. _Copia._ 📄🏛️
● Tarjeta de Identificación Patronal (TIP). Original. 💳🏢
● Aviso de Inscripción Patronal o de Modificación en su Registro. _Original y 2 copias._ 📄🏛️
● Aviso de Baja de Trabajador o Asegurado, solo en caso de contar con trabajadores vigentes. _Original y 2 copias._ 📄👥

*FORMATOS*
Formato AFIL-01. Aviso de Inscripción Patronal o de Modificación en su Registro. _Original y 2 copias._

Formato AFIL-04. Aviso de Baja de Trabajador o Asegurado, solo en caso de contar con trabajadores vigentes. _Original y 2 copias._

En caso de que el representante legal no se encuentre acreditado, deberá presentar:

● Poder notarial donde acredite el carácter del representante legal para actos de administración, dominio o poder especial en donde se especifique que puede realizar toda clase de trámites y firma de documentos ante el Instituto Mexicano del Seguro Social _Original, copia._ 📜👨‍⚖️
● Identificación oficial: _Original,copia._
  ⚬ Credencial para votar expedida por el Instituto Nacional Electoral o por el Instituto Federal Electoral (hasta en tanto concluya su vigencia) 💳🗳️, 
  ⚬ Pasaporte vigente, mexicano o extranjero ✈️📜,
  ⚬ Cartilla del servicio militar nacional 🎖️, 
  ⚬ Cédula profesional 📚🆔,
  ⚬ Matrícula consular (documento de identidad que expide una oficina consular a favor de un connacional) 🏛️🆔📜,
  ⚬ Tarjeta/Cédula/Carnet de identidad para extranjeros (en caso de extranjeros) 🌍🆔📜,
  ⚬ Documento migratorio vigente que corresponda, emitido por autoridad competente (en su caso prórroga o refrendo migratorio) 🌐🆔📜

● Registro Federal de Contribuyentes; documento expedido por el Servicio de Administración Tributaria. 💼📜
● Clave Única de Registro de Población; documento expedido por el Registro Nacional de Población. 🔢📜
`,
};

const affilOpc11 = {
  text: `1. Aviso de Modificación al Registro Patronal por *cambio de nombre, denominación o razón social* del Registro Patronal 🏢🔄📝

2. Aviso de Modificación al Registro Patronal por *cambio de domicilio* 🔄🏠

3. Hacer otra consulta 🔁  

4. Salir ❌`,
  options: {
    1: {
      text: `*Aviso de Modificación al Registro Patronal por cambio de nombre, denominación o razón social del Registro Patronal*

*Documentos Requeridos*

Persona Moral:
● Escritura pública o acta constitutiva que contenga el sello del Registro Público de la Propiedad y del Comercio. _Original y copia_ 📜🏢
● Aviso presentado ante el Servicio de Administración Tributaria. _Copia_ 📄🏛️
● Tarjeta de identificación patronal. 💳🏢
● Aviso de inscripción Patronal o de Modificación en su Registro. _Original y dos copias_. 📋🏢

Persona Física:
● CURP del patrón. _Copia_ 🔢📄
● Identificación oficial con fotografía y firma. _Original y copia_. 🆔💳
● Aviso presentado ante el Servicio de Administración Tributaria. _Copia_ 📄🏛️
● Tarjeta de identificación patronal. _Original_ 💳🏢
● Aviso de inscripción Patronal o de Modificación en su Registro. _Original y dos copias_. 📋🏢

El Aviso de Inscripción Patronal o de Modificación en su Registro (AFIL-01), deberá ser firmado por el patrón, sujeto obligado o representante legal acreditado ante el IMSS, en caso de que el representante legal no se encuentre acreditado deberá presentar:

● Poder notarial donde acredite el carácter del representante legal para actos de administración, dominio o poder especial en donde se especifique que puede realizar toda clase de trámites y firma de documentos ante el Instituto Mexicano del Seguro Social (1 original, 1 copia). 📜👨‍⚖️
● Identificación oficial:
  ⚬ Credencial para votar expedida por el Instituto Nacional Electoral o por el Instituto Federal Electoral (hasta en tanto concluya su vigencia) 🗳️💳,
  ⚬ Pasaporte vigente ✈️🆔,
  ⚬ Cartilla del servicio militar nacional 🎖️,
  ⚬ Cédula profesional 📚📜,
  ⚬ Matrícula consular (documento de identidad que expide una oficina consular a favor de un connacional) 🏛️🆔,
  ⚬ Tarjeta/Cédula/Carnet de identidad para extranjeros (en caso de extranjeros) 🌍🆔,
  ⚬ Documento migratorio vigente que corresponda, emitido por autoridad competente (en su caso prórroga o refrendo migratorio), (en caso de extranjero) (1 original, 1 copia) 🌐📜.

● Registro Federal de Contribuyentes. Documento expedido por el Servicio de Administración Tributaria. 💼📄
● Clave Única de Registro de Población. Documento expedido por el Registro Nacional de Población. 🔢📄

Los documentos considerados como comprobante de domicilio para este trámite son los siguientes:
● Contratos vigentes que pueden estar a nombre del patrón o de un tercero y tener una antigüedad no mayor a dos meses:
  ⚬ Arrendamiento, acompañado del último recibo de pago de renta que cumpla con los requisitos fiscales. 🏠📄💰
  ⚬ Subarrendamiento, acompañado del último recibo de pago de renta que cumpla con los requisitos fiscales. 📄💰📅
  ⚬ Fideicomiso debidamente protocolizado. 📜
  ⚬ Apertura de cuenta bancaria. 🏦📝
  ⚬ Servicio de luz, teléfono o agua. 💡🚿📄
  ⚬ Estado de cuenta a nombre del patrón y tener una antigüedad no mayor a dos meses. Expedido por las instituciones del sistema financiero.🏦📄💰

● Recibos a nombre del patrón o de un tercero y tener una antigüedad no mayor a cuatro meses o tratándose de pago anual deberá corresponder al ejercicio en curso 📄📅:
  ⚬ Del impuesto predial o de los servicios de luz, teléfono o de agua. 💡🚿

● Carta de radicación o de residencia a nombre del patrón y tener una antigüedad no mayor a cuatro meses. Expedida conforme a su ámbito territorial, por gobierno estatal, municipal o sus similares en el Distrito Federal. 🏠📅📜
● Comprobante de alineación y número oficial a nombre del patrón o de un tercero y tener una antigüedad no mayor a cuatro meses. Expedida conforme a su ámbito territorial, por gobierno estatal, municipal o sus similares en el Distrito Federal. 📅📄🏛️
`,
    },
    2: {
      text: `*Aviso de Modificación al Registro Patronal por cambio de domicilio*

*Documentos Requeridos*

● Aviso de Inscripción Patronal o de Modificación en su Registro. _Original y dos copias_ 🏢📄
● Aviso de Modificación de las empresas para el Seguro de Riesgos de Trabajo. _Original y dos copias_ 🏭📄
● Aviso presentado ante el Servicio de Administración Tributaria. _Original y Copia_. 📄🏛️
● Comprobante de domicilio del centro de trabajo. _Original y copia_ 🏠📄
● Tarjeta de Identificación Patronal. _Original_ 💳🏢

En caso de que el representante legal no se encuentre acreditado deberá presentar:
● Poder notarial donde acredite el carácter del representante legal para actos de administración, dominio o poder especial en donde se especifique que puede realizar toda clase de trámites y firma de documentos ante el Instituto Mexicano del Seguro Social (1 original, 1 copia). 📜👨‍⚖️
● Identificación oficial:
  ⚬ Credencial para votar expedida por el Instituto Nacional Electoral o por el Instituto Federal Electoral (hasta en tanto concluya su vigencia) 🗳️💳,
  ⚬ Pasaporte vigente ✈️🆔,
  ⚬ Cartilla del servicio militar nacional 🎖️,
  ⚬ Cédula profesional 📚🆔,
  ⚬ Matrícula consular (documento de identidad que expide una oficina consular a favor de un connacional) 🏛️🆔,
  ⚬ Tarjeta/Cédula/Carnet de identidad para extranjeros (en caso de extranjeros) 🌍🆔,
  ⚬ Documento migratorio vigente que corresponda, emitido por autoridad competente (en su caso prórroga o refrendo migratorio), (en caso de extranjero) (1 original, 1 copia). 🌐📜

● Registro Federal de Contribuyentes. Documento expedido por el Servicio de Administración Tributaria. 💼📄
● Clave Única de Registro de Población. Documento expedido por el Registro Nacional de Población. 🔢📄

Los documentos considerados como comprobante de domicilio para este trámite son los siguientes:
● Contratos vigentes que pueden estar a nombre del patrón o de un tercero y tener una antigüedad no mayor a dos meses:
  ⚬ Arrendamiento, acompañado del último recibo de pago de renta que cumpla con los requisitos fiscales. 🏠📄💰
  ⚬ Subarrendamiento, acompañado del último recibo de pago de renta que cumpla con los requisitos fiscales. 📄💰📅
  ⚬ Fideicomiso debidamente protocolizado. 📜
  ⚬ Apertura de cuenta bancaria. 🏦📝
  ⚬ Servicio de luz, teléfono o agua. 💡🚿📄

● Estado de cuenta a nombre del patrón y tener una antigüedad no mayor a dos meses. Expedido por las instituciones del sistema financiero. 🏦📄💰
● Recibos a nombre del patrón o de un tercero y tener una antigüedad no mayor a cuatro meses o tratándose de pago anual deberá corresponder al ejercicio en curso:
  ⚬ Del impuesto predial o de los servicios de luz, teléfono o de agua. 💡🚿

● Carta de radicación o de residencia a nombre del patrón y tener una antigüedad no mayor a cuatro meses. Expedida conforme a su ámbito territorial, por gobierno estatal, municipal o sus similares en el Distrito Federal. 🏠📅📜
● Comprobante de alineación y número oficial a nombre del patrón o de un tercero y tener una antigüedad no mayor a cuatro meses. Expedida conforme a su ámbito territorial, por gobierno estatal, municipal o sus similares en el Distrito Federal. 📅📄🏛️
`,
    },
  },
};

const affilOpc12 = {
  text: `*Regularización y/o Corrección de tus Datos Personales en el IMSS*

*Documentos Requeridos*

● Copia certificada del Acta de nacimiento. _Original_. 📜👶
● Identificación oficial vigente. _Original_. 💳🆔
● Clave Única de Registro de Población (CURP)*. _Original_. 🔢📜
● Comprobante de domicilio. _Original_. 🏠📜
● Documento expedido por el IMSS que contenga el Número de Seguridad Social (NSS). _Original y copia_. 📄🏥
● Solicitud de regularización y/o corrección de datos personales del asegurado. _Original_. 📋🔄👤

*Se tomará como original la impresión de la constancia CURP en papel bond emitido por el RENAPO.

Nota: En caso de autorizar que la solicitud la realice otra persona, deberá presentar además de los documentos antes señalados la identificación oficial vigente de quien lo solicita: Para representante legal, Poder Notarial que lo acredite en original; en caso de fallecimiento presentar Acta de Defunción del asegurado en original y copia; si eres esposa o esposo, Acta de Matrimonio en original; si eres hijo del asegurado, copia certificada del Acta de Nacimiento en original; si eres padre o madre del asegurado solo deberás presentar tu identificación oficial vigente; y en caso de tratarse de concubina o concubinario, constancia testimonial con que acredite el concubinato expedida por la autoridad judicial competente en original.`,
};

const affilOpc13 = {
  text: `*Solicitud de Constancia de Semanas Reconocidas IMSS – ISSSTE*

*Documentos Requeridos*

● Avisos afiliatorios si cuenta con ellos. _Original_ 📄
● Identificación oficial vigente. _Original_; como puede ser:
  ⚬ Credencial para votar 🗳️💳
  ⚬ Pasaporte vigente ✈️🆔
  ⚬ Cartilla de Servicio Militar Nacional 🎖️
  ⚬ Cédula profesional 📚🆔
  ⚬ Matrícula consular 🏛️🆔
  ⚬ Si eres extranjero: Tarjeta/Cédula/Carnet de identidad de tu país y forma migratoria FM2 o FM3 emitida por el Instituto Nacional de Migración 🌍🆔
● Credencial ADIMSS 💳🆔🏥
● Documento donde conste el Número de Seguridad Social. _Original_. 🔢📄
● Documento de elección del régimen, en caso de que el ISSSTE se lo haya proporcionado. _Original_ 🏢📋
● Estado de cuenta de la AFORE. _Original_ 🏦📄
 
Este trámite también se puede realizar en línea

*Documentos requeridos*

● Calve única de Registro de Población (CURP). _Original_. 🔢📄
● Numero de seguridad social (NSS). _Original_. 🔢🏥
● Correo electrónico 📧
● Documento de elección del régimen, en caso de que el ISSSTE se lo haya proporcionado. _Original_ 🏢📋
● Estado de cuenta de la AFORE. _Original_ 📄💰
  `,
};

const affilOpc14 = {
  text: `*Solicitud de Constancia de Semanas Reconocidas*

*Documentos Requeridos*

*En Internet*:

● Número de Seguridad Social 🔢🏥
● CURP 🔢📄
● Correo electrónico 📧

http://www.imss.gob.mx/tramites/imss02025a

*En la Subdelegación que corresponda a tu domicilio:*

● Documento donde conste el Número de Seguridad Social. _Original_ 🔢📄🏥
● Identificación oficial vigente. _Original_; como puede ser:
  ⚬ Credencial para votar 🗳️💳
  ⚬ Pasaporte vigente ✈️🆔
  ⚬ Cartilla de Servicio Militar Nacional 🎖️
  ⚬ Cédula profesional 📚🆔
  ⚬ Matrícula consular 🏛️🆔
  ⚬ Credencial ADIMSS 💳🆔🏥
`,
};

module.exports = {
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
};
