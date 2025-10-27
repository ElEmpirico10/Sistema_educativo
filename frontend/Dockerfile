# Etapa base
FROM node:20-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto de Vite
EXPOSE 5173

# Comando por defecto: ejecutar Vite con acceso externo
CMD ["npm", "run", "dev", "--", "--host"]
