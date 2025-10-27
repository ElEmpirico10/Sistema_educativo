# 🧩 SistemaEducativo

Proyecto educativo desarrollado con **Laravel**, **React + Vite** y **PostgreSQL**, totalmente **dockerizado** para facilitar su despliegue y desarrollo.

---

## 📚 Descripción general

**SistemaEducativo** es una aplicación que separa claramente su arquitectura en tres partes:

- 🎯 **Backend:** desarrollado con **Laravel**, gestiona la lógica del negocio y expone una API REST.
- 🧠 **Frontend:** creado con **React + Vite**, proporciona la interfaz de usuario moderna y dinámica.
- 🗃️ **Base de datos:** **PostgreSQL**, encargada del almacenamiento persistente de la información.

---

## 🧩 Estructura del proyecto

```
SistemaEducativo/
│
├── backend/            # Proyecto Laravel
│   ├── Dockerfile
│   ├── composer.json
│   └── ...
│
├── frontend/           # Proyecto React + Vite
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── db/                 # Scripts SQL opcionales
│   └── init.sql
│
└── docker-compose.yml  # Configuración principal de Docker
```

---

## ⚙️ Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- (Opcional) [Git](https://git-scm.com/)

---

## 🚀 Inicializar el entorno por primera vez

Construye las imágenes y levanta todos los servicios (backend, frontend y base de datos):

```bash
docker-compose up --build
```

---

## ⚙️ Iniciar el entorno (ya creado)

Si las imágenes ya están construidas, simplemente inicia los contenedores:

```bash
docker-compose up
```

> 💡 Puedes agregar `-d` al final para ejecutarlo en segundo plano:
> ```bash
> docker-compose up -d
> ```

---

## 🛑 Apagar el entorno

Para detener y eliminar los contenedores:

```bash
docker-compose down
```

---

## 🔁 Reiniciar completamente el entorno

Si necesitas reconstruir desde cero (por ejemplo, tras cambiar los Dockerfile o dependencias):

```bash
docker-compose down
docker-compose up --build
```

---

## 📦 Servicios incluidos

| Servicio   | Descripción | Puerto |
|-------------|--------------|--------|
| **backend** | API Laravel que gestiona la lógica del sistema. | `8000` |
| **frontend** | Interfaz en React + Vite que consume la API. | `5173` |
| **db** | Base de datos PostgreSQL que almacena la información. | `5432` |

---

## 🔗 Accesos rápidos

| Recurso | URL |
|----------|-----|
| 🌐 **Frontend (React)** | [http://localhost:5173](http://localhost:5173) |
| ⚙️ **Backend (Laravel)** | [http://localhost:8000](http://localhost:8000) |
| 🗃️ **Base de datos** | Host: `localhost`<br>DB: `softvision`<br>User: `postgres`<br>Pass: `postgres` |

---

## 🧱 Variables de entorno principales

En el archivo `backend/.env` asegúrate de tener:

```env
APP_NAME=SoftVision
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=softvision
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

---

## 💻 Comandos de desarrollo útiles

### 🔹 Entrar al contenedor del backend (Laravel)
```bash
docker exec -it softvision-backend bash
```

### 🔹 Ejecutar migraciones
```bash
php artisan migrate
```

### 🔹 Instalar dependencias de Laravel (si es necesario)
```bash
composer install
```

### 🔹 Instalar dependencias del frontend
```bash
docker exec -it softvision-frontend bash
npm install
```

### 🔹 Ver logs de un servicio
```bash
docker-compose logs -f backend
```

---

## 🔄 Políticas de reinicio automático

Los servicios usan:
```yaml
restart: unless-stopped
```
Esto significa que:
- Se reinician automáticamente si el sistema o Docker se reinicia.
- **No** se reinician si los detienes manualmente con `docker-compose down`.

---

## 🧩 Notas finales

- Los datos de la base de datos se guardan en un volumen persistente (`pgdata`), por lo que **no se pierden al detener los contenedores**.
- Puedes modificar los puertos en el `docker-compose.yml` según tus necesidades.
- Este entorno es ideal tanto para **desarrollo local** como para **entornos de prueba o despliegue**.

---

💡 **Consejo final:**  
Después de levantar el entorno por primera vez, ejecuta dentro del contenedor de Laravel:

```bash
php artisan migrate --seed
```
para crear y poblar las tablas iniciales de la base de datos.
