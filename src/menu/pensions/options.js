const { chatStates } = require('../../chat/chatStates');

const pensionOpt1 = {
  text: `*Solicitud de Pensión de Cesantía en Edad Avanzada o vejez*
  
*Documentos Requeridos*

*Asegurado*
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cual se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anteriores y/o Certificado o Constancia de estudios con fotografía) 🆔📸🖋️
● Documento expedido por la institución bancaria en el cual se identifique el número de cuenta y CLASE Bancaria. 🏦📄
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos ) 📜👶

*Todos los Beneficiarios*:
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cual se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anter iores y/o Certificado o Constancia de estudios con fotografía) 🆔📸🖋️
● Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses previos a la presentación de la solicitud (Credencial para votar, si manifiesta vivir en el domicilio registrado en la misma, Boleta predial, Recibo telefónico (fijo), Agua, Luz, Gas, Constancia de residencia emitida por la autoridad municipal, ejidal o delegacional) 🏡📄
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos ) 📜👶

*Esposa*
● Acta de Matrimonio (La fecha de expedición de este documento, no deberá ser mayor a 90 días naturales. 🤵👰📜
Para el trámite de pensión de viudez, la expedición deberá ser posterior a la fecha de la defunción)
  
*Concubina sin hijos*
● Copia Certificada de la resolución emitida por autoridad judicial, que acredite la relación de concubinato durante los cinco años que precedieron Con Hijos no mayor a 5 años 📄👨‍⚖️
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos) 📜👶

*Con Hijos de 16 – 25 años estudiando*
● Constancia de estudios que acredite su inscripción del ciclo escolar, expedida por instituciones pertenecientes al Sistema Educativo Nacional ( deberá contener nombre completo del alumno, nombre y clave de la institución educativa, si es privada, clave de autorización o de reconocimiento de validez oficial de estudios, ciclo escolar en que está inscrito el alumno y el periodo de la vigencia del mismo incluyendo vacaciones, lugar y fecha en que se expide la constancia . Sello oficial de la institución educativa, firma, nombre y cargo de quien firma la constancia. Se aceptarán constancias con firma electrónica de las instituciones que de acuerdo a su normatividad puedan expedirlas y tengan la misma validez que las constancias expedidas con firma autógrafa. 📄📚

*Discapacitado*
● Dictamen de beneficiario incapacitado ST-6 ♿📄
  
*Padres*
● Constancia expedida por los servicios de Afiliación y Vigencia de Derechos, a través de la cual se acredite que el registro como beneficiario del asegurado o pensionado, se encuentra vigente al momento del fallecimiento de este último, o bien, tratándose de asignaciones familiares a la fecha de la solicitud. 📜

*En caso de no estar registrado como beneficiario*
● Copia Certificada de la resolución emitida por autoridad judicial que acredite la dependencia económica 📜
● El solicitante deberá proporcionar el dato de Número de Seguridad Social, Clave Única de Población (CURP) y en su caso RFC al momento de suscribir algún trámite.`,
};

const pensionOpt2 = {
  text: `*Pensión por Incapacidad Permanente*

*Documentos Requeridos*
  
*Asegurado:*
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cual se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anteriores y/o Certificados o Constancia de estudios con fotografía.) 🆔📸🖋️
● Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses previos a la presentación de la solicitud:
  ⚬ Credencial para votar expedida por el Instituto Nacional Electoral o por el Instituto Federal Electoral (hasta en tanto concluya su vigencia), si manifiesta vivir en el domicilio registrado en la misma. 💳🗳️
  ⚬  Boleta predial (bimestral o anual del ejercicio vigente). 📑🏠
  ⚬  Estado de cuenta de servicio telefónico (fijo). 📄📞
  ⚬  Recibo de consumo de agua. 📄💧
  ⚬  Recibo del servicio de Luz. 📄⚡
  ⚬  Recibo del servicio de gas. 📄🛢️
  ⚬  Constancia de residencia emitida por la autoridad municipal, ejidal o delegacional. 📜🏠

*En caso de haber cotizado de 1997 a la fecha*
● Estado de cuenta que maneja la cuenta individual o contrato firmado con la AFORE, con una antigüedad no mayor a seis meses 💼📈
● Documento expedido por la institución bancaria en el cual se identifique el número de cuenta y CLABE Bancaria. 🏦📄
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos ) 📜👶
● Dictamen de incapacidad permanente o de defunción por riesgo de trabajo ST-3 📄♿

*Todos los Beneficiarios:*
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cual se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anteriores y/o Certificado o Constancia de estudios con fotografía). 🆔📸🖋️
● Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses previos a la presentación de la solicitud (Credencial para votar, si manifiesta vivir en el domicilio registrado en la misma, Boleta predial, Recibo telefónico (fijo), Agua, Luz, Gas, Constancia de residencia emitida por la autoridad municipal, ejidal o delegacional). 🏡📄
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos). 📜👶
  
*Esposa:*
● Acta de Matrimonio (La fecha de expedición de este documento, no deberá ser mayor a 90 días naturales para el trámite de pensión de viudez, la expedición deberá ser posterior a la fecha de la defunción) 🤵👰📜
  
*Concubina sin hijos*
● Copia Certificada de la resolución emitida por autoridad judicial, que acredite la relación deconcubinato durante los cinco años queprecedieron. 📄👨‍⚖️
  
*Con Hijos no mayor a 5 años a la fecha*
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos) 📜👶

*Hijos de 16-25 años estudiando:*
● Constancia de estudios que acredite su inscripción del ciclo escolar, expedida por instituciones pertenecientes al Sistema Educativo Nacional ( deberá contener nombre completo del alumno, nombre y clave de la institución educativa, si es privada, clave de autorización o de reconocimiento de validez oficial de estudios, ciclo escolar en que está inscrito el alumno y el periodo de la vigencia del mismo incluyendo vacaciones, lugar y fecha en que se expide la constancia. Sello oficial de la institución educativa, firma, nombre y cargo de quien firma la constancia. Se aceptarán constancias con firma electrónica de las instituciones que de acuerdo a su normatividad puedan expedirlas y tengan la misma validez que las constancias expedidas con firma autógrafa. 📄📚
  
*Discapacitado*
● Dictamen de beneficiario incapacitado ST-6 📄♿
  
*Padres*
● Constancia expedida por los servicios de Afiliación y Vigencia de Derechos, a través de la cual se acredite que el registro como beneficiario del asegurado o pensionado, se encuentra vigente al momento del fallecimiento de este último, o bien, tratándose de asignaciones familiares a la fecha de la solicitud. En caso de no estar registrado como beneficiario
● Copia Certificada de la resolución emitida por autoridad judicial que acredite la dependencia económica 📜
● El solicitante deberá proporcionar el dato de Número de Seguridad Social, Clave Única de Población (CURP) y en su caso RFC al momento de suscribir algún trámite.`,
};

const pensionOpt3 = {
  text: `*Pensión por Invalidez*

*Documentos Requeridos*
  
*Asegurado*
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cual se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anteriores y/o Certificado o Constancia de estudios con fotografía) 🆔📸🖋️
  
*En caso de haber cotizado de 1997 a la fecha*
● Estado de cuenta que maneja la cuenta individual o contrato firmado con la AFORE, con una antigüedad no mayor a seis meses. 💼📈
● Documento expedido por la institución bancaria en el cual se identifique el número de cuenta y CLABE Bancaria. 🏦📄
● Dictamen de invalidez ST-4 📄♿
  
*Todos los Beneficiarios* 
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cual se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anteriores y/o Certificado o Constancia de estudios con fotografía) 🆔📸🖋️
● Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses previos a la presentación de la solicitud (Credencial para votar, si manifiesta vivir en el domicilio registrado en la misma, Boleta predial, Recibo telefónico (fijo), Agua, Luz, Gas, Constancia de residencia emitida por la autoridad municipal, ejidal o delegacional) 🏡📄
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos) 📜👶

*Esposa*
● Acta de Matrimonio (La fecha de expedición de este documento, no deberá ser mayor a 90 días naturales. 🤵👰📜
Para el trámite de pensión de viudez, la expedición deberá ser posterior a la fecha de la defunción)
  
*Concubina sin hijos*
● Copia Certificada de la resolución emitida por autoridad judicial, que acredite la relación de concubinato durante los cinco años que precedieron. 📄👨‍⚖️
  
*Con Hijos no mayor a 5 años a la fecha*
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos). 📜👶
  
*Con Hijos de 16 – 25 años estudiando:*
● Constancia de estudios que acredite su inscripción del ciclo escolar, expedida por instituciones pertenecientes al Sistema Educativo Nacional (deberá contener nombre completo del alumno, nombre y clave de la institución educativa, si es privada, clave de autorización o de reconocimiento de validez oficial) 📄📚
  
*Discapacitado*
● Dictamen de beneficiario incapacitado ST-6 📄♿

*En caso de no estar registrado como beneficiario*
● Copia Certificada de la resolución emitida por autoridad judicial que acredite la dependencia económica. 📜
● El solicitante deberá proporciona r el dato de Número de Seguridad Social, Clave Única de Población (CURP) y en su caso RFC al momento de suscribir algún trámite.`,
};

const pensionOpt4 = {
  text: `*Pensión por Orfandad*

*Documentos Requeridos*

*Asegurado*
*En caso de haber cotizado de 1997 a la fecha*
● Estado de cuenta que maneja la cuenta individual o contrato firmado con la AFORE, con una antigüedad fec ha no mayor a seis meses. 💼📈
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos) 📜👶
● Acta de Defunción. 📜💀
  
*Pensionado*
● Acta de Defunción. 📜💀
  
Representate Legal
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Naciona l, Documento con fotografía y firma, expedida por la Alcaldía a través del cual se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anteriores y/o Certificado o Constancia de estudios con fotografía) 🆔📸🖋️
● Documento que acredite la personalidad con la que se ostente:
  ⚬ Tratándose de Apoderado o Representante Legal: Copia certificada del testimonio notarial a través del cual se acredite que se cuenta con poder general para actos de dominio, o bien, especial para realizar el trámite que corresponda ante el Instituto (poder notarial) 📜👨‍⚖️
  ⚬ Tratándose de quienes ejercen la Patria Potestad: Copia certificada de Acta de Nacimiento, Acta de Adopción o Reconocimiento; del menor con derecho a alguna de las prestaciones en comento (original y copia simple) o copia certificada de la resolución judicial ejecutoriada , a través de la cual conste el ejercicio de la patria potestad a cargo del solicitante. 📜👶
  ⚬ Tratándose de quienes ejercen la Tutela : Copia certificada de la resolución judicial ejecutoriada que acredite el auto de discernimiento de la tutela, o bien, copia certificada de Acta de Tutela 📜👨‍⚖️
  
*Beneficiario Hijo (a)*
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cua l se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anteriores y/o Certificado o Constancia de estudios con fotografía) 🆔📸🖋️
● Comprobante de domicilio, siempre que su fecha de expedición no tenga una a ntigüedad mayor a tres meses previos a la presentación de la solicitud (Credencial para votar, si manifiesta vivir en el domicilio registrado en la misma, Boleta predial, Recibo telefónico (fijo), Agua, Luz, Gas, Constanc ia de residencia emitida por la autoridad municipal, ejidal o delegacional) 🏡📄
● Documento expedido por la institución bancaria en el cual se identifique el número de cuenta y CLABE Bancaria. 🏦📄
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos) 📜👶
  
*16-25 años estudiando*
● Constancia de estudios que acredite su inscripción del ciclo escolar, expedida por inst ituciones pertenecientes al Sistema Educativo Nacional ( deberá contener nombre completo del a lumno, nombre y clave de la institución educativa, si es privada, clave de autorización o de reconocimiento de validez oficial de estudios, ciclo escolar en que está inscrito el alumno y el periodo de la vigencia del mismo incluyendo estudiando : vacaciones, luga r y fecha en que se expide la constancia. Sello oficial de la institución educativa, firma, nombre y cargo de quien firma la constancia. Se aceptarán constancias con firma electrónica de las instituciones que de acuerdo a su normatividad puedan expedirlas y tengan la misma validez que las constancias expedidas con firma autógrafa. 📄📚
  
*Incapacitado*
● Dictamen de beneficiario incapacitado ST-6 📄♿
● El solicitante deberá proporcionar el dato de Número de Seguridad Social, Clave Única de Población (CURP) y en su caso RFC a l momento de suscribir algún trá mite.`,
};

const pensionOpt5 = {
  text: `*Pensión por Viudez Modalidad A.*

*Documentos Requeridos Asegurado o Pensionado fallecido*

*Asegurado:*
*En caso de haber cotizado de 1997 a la fecha*
● Estado de cuenta que maneja la cuenta individual o contrato firmado con la AFORE, con una antigüedad no mayor a seis meses. 💼📈
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos) 📜👶
● Acta de Defunción. 📜💀

*Pensionado*
● Acta de Defunción 📜💀

*Beneficiarios*
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cua l se haga constar la identidad, Carta de Naturalización, si es menor de edad, cua lquiera de los anteriores y/o Certificado o Constancia de estudios con fotografía) 🆔📸🖋️
● Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses previos a la presentación de la solicitud (Credencial para votar, si manifiesta vivir en el domicilio registrado en la misma, Boleta predial, Recibo telefónico (fijo), Agua, Luz, Gas, Constancia de residencia emitida por la autoridad municipal, ejidal o delegacional) 🏡📄
● Documento expedido por la institución bancaria en el cual se identifique el número de cuenta y CLASE Bancaria. 🏦📄
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos) 📜👶

*Esposa (o)*
● Acta de Matrimonio (La fecha de expedición de este documento, no deberá ser mayor a 90 días naturales. 🤵👰📜
Para el trámite de pensión de viudez, la expedición deberá ser posterior a la fecha de la defunción)

*Concubina(o) sin hijos:*
● Copia Certificada de la resolución emitida por autoridad judicial, que acredite la relación de concubinato durante los cinco años que precedieron. 📄👨‍⚖️

*Con Hijos no mayor a 5 años a la fecha de solicitud.*
● Acta de Nacimiento, Acta de Adopción o Reconocimiento (expedida con firma electrónica de las autoridades administrativas nacionales que otorguen validez a los documentos expedidos) 📜👶


● El solicitante deberá proporcionar el dato de Número de Seguridad Social, Clave Única de Población (CURP) y en su caso RFC al momento de suscribir algún trámite.`,
};

const pensionOpt6 = {
  text: `*Requisitos para Solicitud de finiquito de Segundas Nupcias*

*Documentos Requeridos*
  
*Pensionado*
● Identificación oficial con fotografía y firma (ADIMSS, INE/IFE, Pasaporte, Cartilla del Servicio Militar Nacional, Documento con fotografía y firma, expedida por la Alcaldía a través del cual se haga constar la identidad, Carta de Naturalización, si es menor de edad, cualquiera de los anteriores y/o Certificado o Constancia de estudios con fotografía) 🆔📸🖋️
● Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses previos a la presentación de la solicitud (Credencial para votar, si manifiesta vivir en el domicilio registrado en la misma, Boleta predial, Recibo telefónico (fijo), Agua, Luz, Gas, Constancia de residencia emitida por la autoridad municipal, ejidal o delegacional) 🏡📄
  
*Esposa / Concubina*
● Acta de Matrimonio (La fecha de expedición de este documento, no deberá ser mayor a 90 días naturales . Para el trámite de pensión de viudez, la expedición deberá ser posterior a la fecha de la defunción) 🤵👰📜
  

● El solicitante deberá proporcionar el dato de Número de Seguridad Social, Clave Única de Población (CURP) y en su caso RFC al momento de suscribir algún trámite.`,
};

const pensionOpt7 = {
  text: `*Solicitud de Pensión de Ascendientes*

*Documentos Requeridos*
  
*Del Asegurado:*

*Tratándose de asegurado fallecido:*
2, 4 y 5 (este último requisito se deberá presentar si el asegurado tiene cotizaciones posteriores al 30 de junio de 1997) 14 y 17.

*Del Beneficiario:*
1, 3, 4, 6, 7, 14 y 18, del solicitante respecto del asegurado o pensionado fallecido, al momento del fallecimiento de éste, o bien, 35, cuando los ascendientes del asegurado o pensionado, se encuentren registrados ante el Instituto como beneficiarios del primero.
  
*Lista de documentos a presentar en los trámites*
  
*Del Asegurado:*

*Tratándose de asegurado fallecido:*
*I. Original o copia certificada, acompañados de copia simple para  cotejo:*

● Cualquier documento o medio de identificación emitido por el IMSS, el INFONAVIT o una AFORE, que contenga el Número de Seguridad Social y el nombre del asegurado o pensionado. 📄
● Clave Única de Registro de Población (CURP). 🆔📑
● Estado de cuenta. 📄📈

*II.- En original o copia certificada, que quedarán en el expediente:*
  
● Copia certificada del Acta de Nacimiento, Acta de Adopción o Reconocimiento, expedida por: Las oficinas o juzgados del Registro Civil 📜👶
● Copia certificada del Acta de Defunción, expedida por: Las oficinas o juzgados del Registro Civil 📜💀
  
*Tratándose de pensionado fallecido:*

*I. Original o copia certificada, acompañados de copia simple para cotejo:*
  
● Cualquier documento o medio de identificación emitido por el IMSS, el INFONAVIT o una AFORE, que contenga el Número de Seguridad Social y el nombre del asegurado o pensionado. 📄
  
*II.- En original o copia certificada, que quedarán en el expediente:*

● Copia certificada del Acta de Defunción, expedida por: Las oficinas o juzgados del Registro Civil 📜💀
  
*Del Beneficiario:*

*I.- En original o copia certificada, acompañados de copia simple para cotejo:*
  
● Identificación oficial con fotografía y firma (vigente) 🆔📸🖋️
● Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses 🏡📄
● Clave Única de Registro de Población (CURP) 🆔📑
● Constancia de la inscripción del asegurado en el Registro Federal de Contribuyentes, con homoclave a 13 posiciones 📜💰
● Documento expedido por la institución de crédito autorizada por el Instituto, dentro de la circunscripción de que se trate, en el cual se identifique el número de cuenta y Clave Bancaria Estandarizada, a favor del solicitante para recibir el pago de la pensión. 🏦📄
  
*II.- En original o copia certificada, que quedarán en el expediente:*
  
● Copia certificada del Acta de Nacimiento, Acta de Adopción o Reconocimiento, expedida por: Las oficinas o juzgados del Registro Civil 📜👶
● Copia Certificada de la resolución emitida por autoridad judicial que acredite la dependencia económica. 📜👨‍⚖️ 
● Constancia expedida por los servicios de Afiliación y Vigencia de Derechos, a través de la cual se acredite que el registro como beneficiario del asegurado o pensionado, se encuentra vigente al momento del fallecimiento de este último. 📜`,
};

const pensionOpt8 = {
  text: `*Asignaciones Familiares*
  
*Documentos Requeridos*

*Tú, como asegurado y/o pensionado*
  
● Identificación oficial con fotografía y firma, como puede ser:
  ⚬ Credencial para votar 💳🗳️
  ⚬ Pasaporte ✈️🆔
  ⚬ Cartilla de Servicio Militar 🎖️
  ⚬ Credencial ADIMSS 💳🏥

● En caso de ser menor de 9 años de edad se aceptará como identificación la credencial escolar 💳📚
● Comprobante de comicilio con antigüedad no mayor a 3 meses de expedición, como puede ser: agua, luz, teléfono, gas. No es necesario que esté a tu nombre 🏡📄
● Impresión de CURP 🆔📑
  
*Tu esposa(o)*
● Copia certificada expedida por el Registro Civil, de acta de matrimonio 🤵👰📜

*Tu concubina*
● Constancia testimonial que confirme el concubinato expedida por la autoridad judicial competente 📄👨‍⚖️
  
*Tu hijo menor de 16 años*
● Copia certificada expedida por el Registro Civil de acta de nacimiento, acta de adopción o reconocimiento 📜👶
  
*Tu hijo mayor de 16 años y hasta 25 años estudiante*
● Copia certificada expedida por el Registro Civil del acta de nacimiento, acta de adopción o reconocimiento Constancia de estudios del año en curso expedida por las escuelas reconocidas ante la SEP; con los datos: 📜👶 📄📚
  ⚬ Nombre completo del alumno
  ⚬ Nombre y clave del plantel educativo
  ⚬ Grado que cursa y ciclo escolar (periodo que cursa)
  ⚬ Lugar y fecha en que se expide el documento
  ⚬ Firma autógrafa del director del plantel escolar o de la persona en quien esté delegada esta función
  ⚬ Sello oficial del plantel escolar
  
  Adicionalmente en constancias expedidas por escuelas particulares:
  ⚬ Clave de incorporación
  ⚬ Fecha y número del acuerdo por el que se les otorgó el reconocimiento de validez oficial
  
Se aceptarán constancias con firma electrónica que contengan la liga de acceso de Internet de la escuela que lo expide y clave o número de verificación. 🌐🔒
 
*Tu hijo mayor de 16 años con discapacidad*
● Copia certificada del acta de nacimiento, acta de adopción o reconocimiento expedida por el Registro Civil 📜👶
● Dictamen de Invalidez de beneficiario, Formato ST-6 📄♿
  
*Tus ascendientes (padres)*
● Copia certificada de acta de nacimiento, acta de adopción o reconocimiento expedida por el Registro Civil 📜👶
● Constancia testimonial con la que confirmes la dependencia económica expedida por la autoridad judicial competente 📜`,
};

const pensionOpt9 = {
  text: `*Pensión por Invalidez (asegurado)*
  
*Documentos Requeridos*
  
Los identificados con los numerales del apartado “Lista de documentos a presentar en los trámites”:
  
*Del asegurado*: 1, 2, 3, 4, 5 (este requisito es aplicable si el asegurado tiene cotizaciones posteriores al 30 de junio de 1997 y su solicitud se refiere a invalidez con carácter definitivo), 6, 7, 14 y 32 (este último será proporcionado por los Servicios de Salud en el Trabajo).
  
*Documentos del asegurado:*

*I.- En original o copia certificada, acompañados de copia simple para cotejo:*
1. Identificación oficial con fotografía y firma (vigente de acuerdo con la legislación que aplique a cada una de ellas), cualquiera de las siguientes: 🆔📸🖋️
  a) Tratándose de mexicanos: Ver documentos abajo(A,B,C,D,E,F,G,H). Para menores de edad se aceptará: (A,D,F,G,I)
  b) Tratándose de extranjeros: (A,C,J,K,L)
  
*Documentos:*
*A.* Credencial ADIMSS. 💳🏥
*B.* Credencial para votar, expedida por el Instituto Nacional Electoral o por el Instituto Federal Electoral, hasta en tanto concluya su vigencia. 💳🗳️
*C.* Cédula Profesional, expedida por la Secretaría de Educación Pública, a través de la Dirección General de Profesiones. 📄🎓
*D.* Pasaporte expedido por la Secretaría de Relaciones Exteriores. ✈️🆔
*E.* Cartilla del Servicio Militar Nacional, emitida por la Secretaría de la Defensa Nacional. 🎖️
*F.* Cédula de Identidad Personal, emitida por la Secretaría de Gobernación. 📜
*G.* Documento con fotografía expedido por la Delegación o Municipio en donde reside el interesado, a través del cual se haga constar la identidad del mismo. 🆔📄 
*H.* Carta de naturalización. 📄
*I.* Constancia de estudios con fotografía, expedida por institución educativa perteneciente al Sistema Educativo Nacional. 📸📄📚
*J.* Pasaporte. ✈️🆔
*K.* Documento migratorio expedido por las Oficinas Consulares de México en el extranjero (Visa de residencia temporal, Visa de residente temporal estudiante, Visa de residencia permanente, Visa de visitante sin permiso para realizar actividades remuneradas o Visa de visitante con permiso para realizar actividades remuneradas). 📄🌍
*L.* Tarjeta de residencia, expedida por el Instituto Nacional de Migración. 💳🌍

2. Cualquier documento o medio de identificación emitido por el IMSS, el INFONAVIT o una AFORE, que contenga el Número de Seguridad Social y el nombre del asegurado o pensionado. 📄🏥

3. Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses previos a la presentación de la solicitud:
  ⚬ Credencial para votar expedida por el Instituto Nacional Electoral o por el Instituto Federal Electoral (hasta en tanto concluya su vigencia), si manifiesta vivir en el domicilio registrado en la misma. 💳🗳️
  ⚬ Boleta predial (bimestral o anual del ejercicio vigente). 📑🏠 
  ⚬ Estado de cuenta de servicio telefónico (fijo). 📄📞
  ⚬ Recibo de consumo de agua. 📄💧
  ⚬ Recibo del servicio de Luz. 📄⚡
  ⚬ Recibo del servicio de gas. 📄🛢️
  ⚬ Constancia de residencia emitida por la autoridad municipal, ejidal o delegacional. 📜🏠
  
4. Clave Única de Registro de Población (CURP), copia simple o impresión de la misma obtenida a través de la página de Internet del Registro Nacional de Población, salvo en los casos en que el solicitante tenga nacionalidad diferente a la mexicana y residan en el extranjero. También podrá aceptarse para satisfacer este requisito, la presentación de la credencial ADIMSS que contenga el dato de la CURP. 🆔📑
  
5. Estado de cuenta, impresión obtenida de la página de Internet de la AFORE que maneja la cuenta individual o contrato firmado con la AFORE, con una antigüedad no mayor a seis meses previos a la fecha de la solicitud de la pensión o de la prestación económica de que se trate, sólo si el asegurado cotizó a partir del 1 de julio de 1997. 💼📈
  
6. Constancia de la inscripción del asegurado en el Registro Federal de Contribuyentes, con homoclave a 13 posiciones, a través de la presentación de cualquiera de los documentos siguientes:
  ⚬ Constancia de inscripción en el Registro Federal de Contribuyentes. 📜💰
  ⚬ Cédula de Identificación Fiscal. 📄💰
  ⚬ Comprobante de pago de salario, Estado de Cuenta de su Cuenta Individual AFORE, factura fiscal expedida a su favor, en general, cualquier documento que contenga dicho dato. Este documento se deberá presentar por los solicitantes mayores de edad, dentro de los cinco días naturales siguientes a la notificación de la resolución a través de la cual se otorgue la pensión, sin embargo, el solicitante podrá entregarlo desde el día que presente su Solicitud de Pensión. 📄💼📈
  
7. Documento expedido por la institución de crédito autorizada por el Instituto, dentro de la circunscripción de que se trate, en el cual se identifique el número de cuenta y Clave Bancaria Estandarizada, a favor del solicitante para recibir el pago de la pensión. Este documento se deberá presentar, dentro de los cinco días naturales siguientes a la elección del régimen de pensión de la Ley del Seguro Social de 1973 o de la notificación de la resolución que otorga la pensión, según sea el caso. Sin embargo, el solicitante podrá entregar dicho documento desde el día que presente su Solicitud de Pensión. 📄🏦
  
*II.- En original o copia certificada, que quedarán en el expediente:*

14. Copia certificada del Acta de Nacimiento, Acta de Adopción o Reconocimiento, expedida por: 📜👶
  ⚬ Las oficinas o juzgados del Registro Civil de la Entidad Federativa que corresponda o del Distrito Federal.
  ⚬ Las Representaciones Consulares de México.
  ⚬ Gobierno Extranjero. En este caso, se debe atender a las disposiciones que sobre documentos públicos expedidos en el extranjero prevé el derecho común y los tratados internacionales. También se aceptarán Copia certificada del Acta de Nacimiento, Reconocimiento o Adopción, expedida con firma electrónica de las autoridades administrativas nacionales, cuyas legislaciones otorguen validez a los documentos expedidos de esa forma. La Carta de naturalización hará las veces de Acta de Nacimiento.
  
* NOTA: Deberán contar con la Apostilla o Legalización correspondiente. Así mismo, si está redactado en idioma distinto al español deberá acompañar la traducción por perito oficial.
  
32. Dictamen de invalidez ST-4, expedida por los servicios médicos institucionales, que acredite el estado de invalidez del asegurado. (Este último será proporcionado por los Servicios de Salud en el Trabajo correspondientes y quedará en el expediente). 📄♿`,
};
const pensionOpt10 = {
  text: `1. Asegurado 👤🛡️

2. Beneficiario 👤🤝

3. Hacer otra consulta 🔁  

4. Salir ❌`,
  options: {
    1: {
      text: `*Pensión por Orfandad Hijo mayor de 16 años Incapacitado (Asegurado)*
    
*Documentos Requeridos del Asegurado o Pensionado Fallecido*
    
*Del Asegurado:*
*Tratándose de Asegurado Fallecido:*
*I. Original o copia certificada, acompañados de copia simple para cotejo:*
2. Cualquier documento o medio de identificación emitido por el IMSS, el INFONAVIT o una AFORE, que contenga el Número de Seguridad Social y el nombre del asegurado o pensionado. 🏦📄

4. Clave Única de Registro de Población (CURP), copia simple o impresión de la misma obtenida a través de la página de Internet del Registro Nacional de Población, salvo en los casos en que el solicitante tenga nacionalidad diferente a la mexicana y residan en el extranjero. También podrá aceptarse para satisfacer este requisito, la presentación de la credencial ADIMSS que contenga el dato de la CURP. 🆔📑

5. Estado de cuenta, impresión obtenida de la página de Internet de la AFORE que maneja la cuenta individual o contrato firmado con la AFORE, con una antigüedad no mayor a seis meses previos a la fecha de la solicitud de la pensión o de la prestación económica de que se trate, sólo si el asegurado cotizó a partir del 1 de julio de 1997. 📄📈
    
*II.- En original o copia certificada, que quedarán en el expediente:*
14. Copia certificada del Acta de Nacimiento, Acta de Adopción o Reconocimiento, expedida por: 📜👶 
  ● Las oficinas o juzgados del Registro Civil de la Entidad Federativa que corresponda o del Distrito Federal. 
  ● Las Representaciones Consulares de México. 
  ● Gobierno Extranjero. En este caso, se debe atender a las disposiciones que sobre documentos públicos expedidos en el extranjero prevé el derecho común y los tratados internacionales. También se aceptarán Copia certificada del Acta de Nacimiento, Reconocimiento o Adopción, expedida con firma electrónica de las autoridades administrativas nacionales, cuyas legislaciones otorguen validez a los documentos expedidos de esa forma. La Carta de naturalización hará las veces de Acta de Nacimiento.

17. Copia certificada del Acta de Defunción, expedida por: 📜💀
  ● Las oficinas o juzgados del Registro Civil de la Entidad Federativa que corresponda o del Distrito Federal. 
  ● Las Representaciones Consulares de México, 
  ● Gobierno Extranjero. En este caso, se debe atender a las disposiciones que sobre documentos públicos expedidos en el extranjero provee el derecho común y los tratados internacionales
    

*Tratándose de Pensionado Fallecido:*
*I. Original o copia certificada, acompañados de copia simple para cotejo:*    
2. Cualquier documento o medio de identificación emitido por el IMSS, el INFONAVIT o una AFORE, que contenga el Número de Seguridad Social y el nombre del asegurado o pensionado. 🏦📄

*II.- En original o copia certificada, que quedarán en el expediente:* 
17. Copia certificada del Acta de Defunción, expedida por: 📜💀 
  ● Las oficinas o juzgados del Registro Civil de la Entidad Federativa que corresponda o del Distrito Federal. 
  ● Las Representaciones Consulares de México, 
  ● Gobierno Extranjero. En este caso, se debe atender a las disposiciones que sobre documentos públicos expedidos en el extranjero provee el derecho común y los tratados internacionales.
    

*Del representante legal del Beneficiario, en su caso:*
*I. Original o copia certificada, acompañados de copia simple para cotejo:*
1. Identificación oficial con fotografía y firma (vigente de acuerdo con la legislación que aplique a cada una de ellas), cualquiera de las siguientes:
  a) Tratándose de mexicanos: 
    ● Credencial ADIMSS. 💳🏥
    ● Credencial para votar, expedida por el Instituto Nacional electoral o por Instituto Federal Electoral hasta en tanto concluya su vigencia. 💳🗳️
    ● Cédula Profesional, expedida por la Secretaría de Educación Pública, a través de la Dirección General de Profesiones. 📄📚
    ● Pasaporte expedido por la Secretaría de Relaciones Exteriores. ✈️🆔
    ● Cartilla del Servicio Militar Nacional, emitida por la Secretaría de la Defensa Nacional. 🎖️
    ● Cédula de Identidad Personal, emitida por la Secretaría de Gobernación. 🆔📜
    ● Documento con fotografía expedido por la Delegación o Municipio en donde reside el interesado, a través del cual se haga constar la identidad del mismo. 📸📄
    ● Carta de naturalización. 📜
    
  b) Tratándose de extranjeros: 
    ● Pasaporte. ✈️🆔
    ● Documento migratorio expedido por las Oficinas Consulares de México en el extranjero (Visa de residencia temporal, Visa de residente temporal estudiante, Visa de residencia permanente, Visa de visitante sin permiso para realizar actividades remuneradas o Visa de visitante con permiso para realizar actividades remuneradas). 📄🌍
    ● Tarjeta de residencia, expedida por el Instituto Nacional de Migración. 💳🌍
    ● Credencial ADIMSS. 💳🏥
    ● Cédula Profesional, expedida por la Secretaría de Educación Pública, a través de la Dirección General de Profesiones. 📄📚
    
*II.- En original o copia certificada, que quedarán en el expediente:*
27. Documento que acredite la personalidad con la que se ostente, como es alguno de los siguientes: 
  a) Tratándose de Apoderado Legal: 
    ● Copia certificada del testimonio notarial a través del cual se acredite que se cuenta con poder general para actos de dominio, o bien, especial para realizar el trámite que corresponda ante el Instituto. 📄👨‍⚖️
    
  b) Tratándose de quienes ejercen la Patria Potestad: 
    ● Copia certificada de Acta de Nacimiento, Acta de Adopción o Reconocimiento; del menor con derecho a alguna de las prestaciones en comento (original y copia simple), expedida por: 📜👶
      ⚬ Las oficinas o juzgados del Registro Civil de la Entidad Federativa que corresponda o del Distrito Federal. 
      ⚬ Las  Representaciones Consulares de México, 
      ⚬ Gobierno Extranjero. En este caso, se debe atender a las disposiciones que sobre documentos públicos expedidos en el extranjero provee el derecho común y los tratados internacionales. 
    
    ● En su caso, copia certificada de la resolución judicial ejecutoriada, a través de la cual conste el ejercicio de la patria potestad a cargo del solicitante. 📄👨‍⚖️
    
  c) Tratándose de quienes ejercen la Tutela: 
    ● Copia certificada de la resolución judicial ejecutoriada que acredite el auto de discernimiento de la tutela, o bien, copia certificada de Acta de Tutela. 📜👨‍⚖️`,
    },
    2: {
      text: `*Pensión por Orfandad Hijo mayor de 16 años Incapacitado (Beneficiario)*
    
*Documentos Requeridos del Beneficiario*

*Del Beneficiario:*
*I.- En original o copia certificada, acompañados de copia simple para cotejo:*
1. Identificación oficial con fotografía y firma (vigente de acuerdo con la legislación que aplique a cada una de ellas), cualquiera de las siguientes:
  a) Tratándose de mexicanos: 
    ● Credencial ADIMSS. 💳🏥
    ● Credencial para votar, expedida por el Instituto Nacional Electoral o por Instituto Federal Electoral, hasta en tanto concluya su vigencia. 💳🗳️
    ● Cédula Profesional, expedida por la Secretaría de Educación Pública, a través de la Dirección General de Profesiones. 📄📚
    ● Pasaporte expedido por la Secretaría de Relaciones Exteriores. ✈️🆔
    ● Cartilla del Servicio Militar Nacional, emitida por la Secretaría de la Defensa Nacional. 🎖️ 
    ● Cédula de Identidad Personal, emitida por la Secretaría de Gobernación. 📜🆔
    ● Documento con fotografía expedido por la Delegación o Municipio en donde reside el interesado, a través del cual se haga constar la identidad del mismo. 📸📄
    ● Carta de naturalización. 📜
    
  Para menores de edad se aceptará: 
    ● Credencial ADIMSS. 💳🏥
    ● Pasaporte expedido por la Secretaría de Relaciones Exteriores ✈️🆔
    ● Constancia de estudios con fotografía, expedida por institución educativa perteneciente al Sistema Educativo Nacional. 📄📚
    ● Cédula de Identidad Personal emitida por la Secretaría de Gobernación. 📜🆔
    ● Documento con fotografía expedido por la Delegación o Municipio en donde reside el menor, a través del cual se haga constar la identidad del mismo. 📸📄
    
  b) Tratándose de extranjeros: 
    ● Pasaporte. ✈️🆔
    ● Documento migratorio expedido por las Oficinas Consulares de México en el extranjero (Visa de residencia temporal, Visa de residente temporal estudiante, Visa de residencia permanente, Visa de visitante sin permiso para realizar actividades remuneradas o Visa de visitante con permiso para realizar actividades remuneradas). 📄🌍
    ● Tarjeta de residencia, expedida por el Instituto Nacional de Migración. 💳🌍
    ● Credencial ADIMSS. 💳🏥
    ● Cédula Profesional, expedida por la Secretaría de Educación Pública, a través de la Dirección General de Profesiones. 📄📚
    
3. Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses previos a la presentación de la solicitud: 
  ● Credencial para votar expedida por el Instituto Nacional electoral o por Instituto Federal Electoral (hasta en tanto concluya su vigencia), si manifiesta vivir en el domicilio registrado en la misma 💳🗳️
  ● Boleta predial (bimestral o anual del ejercicio vigente) 🏡📄
  ● Estado de cuenta de servicio telefónico (fijo) 📄📞
  ● Recibo de consumo de agua 📄💧
  ● Recibo del servicio de luz 📄⚡
  ● Recibo del servicio de gas 📄🛢️
  ● Constanciade residencia emitida por la autoridad municipal, ejidal o delegacional 📜🏠

4. Clave Única de Registro de Población (CURP), copia simple o impresión de la misma obtenida a través de la página de Internet del Registro Nacional de Población, salvo en los casos en que el solicitante tenga nacionalidad diferente a la mexicana y residan en el extranjero. También podrá aceptarse para satisfacer este requisito, la presentación de la credencial ADIMSS que contenga el dato de la CURP. 📑🆔
    
6. Constancia de la inscripción del asegurado en el Registro Federal de Contribuyentes, con homoclave a 13 posiciones, a través de la presentación de cualquiera de los documentos siguientes: 
  ● Constancia de inscripción en el Registro Federal de Contribuyentes. 📜💰
  ● Cédula de Identificación Fiscal. 📄💰
  ● Comprobante de pago de salario, Estado de Cuenta de su Cuenta Individual AFORE, factura fiscal expedida a su favor, en general, cualquier documento que contenga dicho dato. Este documento se deberá presentar por los solicitantes mayores de edad, dentro de los cinco días naturales siguientes a la notificación de la resolución a través de la cual se otorgue la pensión, sin embargo el solicitante podrá entregarlo desde el día que presente su Solicitud de Pensión. 📑📈💰
    
7. Documento expedido por la institución de crédito autorizada por el Instituto, dentro de la circunscripción de que se trate, en el cual se identifique el número de cuenta y Clave Bancaria Estandarizada, a favor del solicitante para recibir el pago de la pensión. Este documento se deberá presentar, dentro de los cinco días naturales siguientes a la elección del régimen de pensión de la Ley del Seguro Social de 1973 o de la notificación de la resolución que otorga la pensión, según sea el caso. Sin embargo, el solicitante podrá entregar dicho documento desde el día que presente su Solicitud de Pensión. 🏦📄
    
*II.- En original o copia certificada, que quedarán en el expediente:*
14. Copia certificada del Acta de Nacimiento, Acta de Adopción o Reconocimiento, expedida por: 📜👶
  ● Las oficinas o juzgados del Registro Civil de la Entidad Federativa que corresponda o del Distrito Federal. 
  ● Las Representaciones Consulares de México. 
  ● Gobierno Extranjero. En este caso, se debe atender a las disposiciones que sobre documentos públicos expedidos en el extranjero prevé el derecho común y los tratados internacionales. También se aceptarán Copia certificada del Acta de Nacimiento, Reconocimiento o Adopción, expedida con firma electrónica de las autoridades administrativas nacionales, cuyas legislaciones otorguen validez a los documentos expedidos de esa forma. La Carta de naturalización hará las veces de Acta de Nacimiento.
    
33. Dictamen de beneficiario incapacitado ST-6, expedido por los servicios médicos institucionales, que acredite que el beneficiario se encuentre totalmente incapacitado. Este documento será proporcionado directamente por los servicios de Salud en el Trabajo correspondientes y quedará en el expediente. 📄♿`,
    },
    3: { text: chatStates.onGoBack },
    4: { text: chatStates.onExit },
  },
};

const pensionOpt11 = {
  text: `*Solicitud de Pensión de Retiro*

*Documentos Requeridos*

*Requisitos*
Los requisitos para que se otorgue la pensión por Retiro conforme al Régimen de la Ley del Seguro Social de 1997:
  ● Que el asegurado tenga menos de 60. 👨‍🦳👩‍🦳
  ● Que tenga un mínimo 1250 semanas de cotización en el Régimen Obligatorio del Seguro Social. 📅❗
  ● Que los recursos de la cuenta individual sean suficientes para el retiro.💰
  ● Que la pensión que se calcule en el Sistema de Rentas Vitalicias sea superior en más de 30% de la pensión garantizada, una vez cubierta la prima del seguro de sobrevivencia para sus beneficiarios. 📈
  ● Causar baja en el Régimen Obligatorio de la Ley del Seguro Social.
  ● Se encuentre privado de trabajo remunerado. 💼❌
  
*Documento Requeridos*
*I.- En original o copia certificada, acompañados de copia simple para cotejo:
1. Identificación oficial con fotografía y firma (vigente)
Tratándose de extranjeros: 
  ● Pasaporte. ✈️🆔
  ● Documento migratorio expedido por las Oficinas Consulares de México en el extranjero (Visa de residencia temporal, Visa de residente temporal estudiante, Visa de residencia permanente, Visa de visitante sin permiso para realizar actividades remuneradas o Visa de visitante con permiso para realizar actividades remuneradas 📜🌍
  
2. Cualquier documento o medio de identificación emitido por el IMSS, el INFONAVIT o una AFORE, que contenga el Número de Seguridad Social y el nombre del asegurado o pensionado. 📄🏥
  
3. Comprobante de domicilio, siempre que su fecha de expedición no tenga una antigüedad mayor a tres meses:
  ● Credencial para votar expedida por el Instituto Nacional Electoral, si manifiesta vivir en el domicilio registrado en la misma 💳🗳️
  ● Boleta predial 🏡📄
  ● Estado de cuenta de servicio telefónico (fijo) 📄📞
  ● Recibo de consumo de agua 📄💧
  ● Recibo del servicio de luz 📄⚡
  ● Recibo del servicio de gas 📄🛢️
  ● Constancia de residencia emitida por la autoridad municipal, ejidal o delegacional 📜🏠
  
4. Clave Única de Registro de Población (CURP), copia simple. También podrá aceptarse para satisfacer este requisito, la presentación de la credencial ADIMSS que contenga el dato de la CURP. 🆔📑
  
5. Estado de cuenta, impresión obtenida de la página de Internet de la AFORE que maneja la cuenta individual o contrato firmado con la AFORE, con una antigüedad no mayor a seis meses. 📄💰📈
  
6. Constancia de la inscripción del asegurado en el Registro Federal de Contribuyentes, con homoclave a 13 posiciones Este documento se deberá presentar por los solicitantes mayores de edad, dentro de los cinco días naturales siguientes a la notificación de la resolución a través de la cual se otorgue la pensión, sin embargo el solicitante podrá entregarlo desde el día que presente su Solicitud de Pensión. 📄💼💰
  
7. Documento expedido por la institución de crédito autorizada por el Instituto, dentro de la circunscripción de que se trate, en el cual se identifique el número de cuenta y Clave Bancaria Estandarizada, a favor del solicitante para recibir el pago de la pensión. 📄🏦
  
*II.- En original o copia certificada, que quedarán en el expediente:*
  ● Copia certificada del Acta de Nacimiento, Acta de Adopción o Reconocimiento. 📜👶`,
};

module.exports = {
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
};
