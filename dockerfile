# ETAPA 1: Construcción (Builder)
# Usamos Node para instalar dependencias y compilar
FROM node:18-alpine AS builder

WORKDIR /app

# Copiamos primero los package.json para aprovechar la caché de Docker
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Ejecutamos el build (esto creará la carpeta 'dist')
RUN npm run build

# ETAPA 2: Servidor Web (Runner)
# Usamos Nginx ligero para servir los archivos estáticos
FROM nginx:alpine

# Copiamos los archivos compilados desde la etapa anterior a la carpeta de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiamos una configuración personalizada de Nginx (paso 2 abajo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]