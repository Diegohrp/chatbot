# Usar una imagen base de Node.js versión 16
FROM node:16-slim

# Configurar Puppeter para que no descargue su propia versión de Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Instalar dependencias para ejecutar Puppeteer
RUN apt-get update \
    && apt-get install -y wget gnupg ca-certificates procps libxss1 \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el 'package.json' y 'package-lock.json' (si está disponible)
COPY package*.json ./

# Instalar dependencias del proyecto, incluyendo Puppeteer.
RUN npm ci

# Copiar los archivos del proyecto al contenedor
COPY . .

# Iniciar la aplicación
CMD [ "node", "src/index.js" ]
