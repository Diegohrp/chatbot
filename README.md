# IMSS Chatbot for Subdelegación Naucalpan (English)

## Project Description
This chatbot is designed to assist the beneficiaries of the IMSS Subdelegación Naucalpan. It aims to minimize in-person visits by providing detailed information about all administrative procedures and their requirements. The chatbot is in a trial phase and is slated to serve as an auxiliary tool for TAODs.

## Local Setup
- Install Python and Node.js.
- Run `npm install` to install dependencies.
- Start the development server with `npm run dev`.

## Main Libraries
- `venom-bot`: For WhatsApp interaction.
- `express`: For the web server framework.

## Usage
Access the chatbot at `http://localhost:3000/chatbot` to generate a QR code for linking to a WhatsApp Business account.

## Environment Variables
- `PORT`: Server's port (default: 3000 for local).
- `NODE_ENV`: The environment mode (`production` for GCP).

## Google Cloud Platform Deployment
- Deploy the app with `gcloud app deploy`.

## Contributions
Check the main collaborators' repositories:
- [Diegohrp](https://github.com/Diegohrp)
- [Xalot](https://github.com/Xalot)

---

# Chatbot del IMSS para Subdelegación Naucalpan (Español)

## Descripción del Proyecto
Este chatbot está diseñado para asistir a los beneficiarios de la Subdelegación Naucalpan del IMSS. Su objetivo es minimizar las visitas en persona proporcionando información detallada sobre todos los trámites administrativos y sus requisitos. El chatbot está en fase de prueba y está previsto como una herramienta auxiliar para las TAODs.

## Configuración Local
- Instala Python y Node.js.
- Ejecuta `npm install` para instalar las dependencias.
- Inicia el servidor de desarrollo con `npm run dev`.

## Principales Bibliotecas
- `venom-bot`: Para la interacción con WhatsApp.
- `express`: Como framework del servidor web.

## Uso
Accede al chatbot en `http://localhost:3000/chatbot` para generar un código QR para enlazar a una cuenta de WhatsApp Business.

## Variables de Entorno
- `PORT`: Puerto del servidor (predeterminado: 3000 local).
- `NODE_ENV`: El modo de entorno (`production` para GCP).

## Despliegue en Google Cloud Platform
- Despliega la app con `gcloud app deploy`.

## Contribuciones
Revisa los repositorios de los colaboradores principales:
- [Diegohrp](https://github.com/Diegohrp)
- [Xalot](https://github.com/Xalot)
