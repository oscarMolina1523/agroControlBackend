
# Agrocontrol Backend API - Sistema Inteligente de Gestión de Cultivos para Alimentación Porcina

<img width="1902" height="906" alt="image" src="https://github.com/user-attachments/assets/02711b64-5369-4eb5-a6c8-1d0b0d6bb672" />

## Descripción

Este proyecto corresponde al **backend** del Sistema de Gestión de Cultivos para Alimentación Porcina (AGROCONTROL), desarrollado como una API REST utilizando **Node.js** y **TypeScript**. Su objetivo es centralizar toda la lógica de negocio relacionada con la administración de cultivos destinados a la alimentación porcina, proporcionando una plataforma segura, escalable y mantenible.

La API implementa autenticación mediante **JSON Web Tokens (JWT)**, autorización basada en **Roles y Permisos (RBAC)**, inyección de dependencias con **tsyringe** y persistencia de datos utilizando **Turso (libSQL)**.

---

# Objetivos

* Centralizar la lógica de negocio del sistema.
* Proteger todos los recursos mediante autenticación y autorización.
* Facilitar el mantenimiento mediante una arquitectura modular.
* Permitir la integración con aplicaciones web, móviles o dispositivos IoT.
* Garantizar escalabilidad para futuras funcionalidades.

---

# Tecnologías utilizadas

| Tecnología     | Descripción                            |
| -------------- | -------------------------------------- |
| Node.js        | Entorno de ejecución                   |
| TypeScript     | Lenguaje principal                     |
| Express.js     | Framework HTTP                         |
| Turso (libSQL) | Base de datos                          |
| tsyringe       | Inyección de dependencias              |
| JWT            | Autenticación                          |
| bcrypt         | Cifrado de contraseñas                 |
| dotenv         | Variables de entorno                   |
| CORS           | Configuración de acceso entre dominios |
| UUID           | Identificadores únicos                 |
| ESLint         | Calidad de código                      |
| Prettier       | Formateo del código                    |

---

# Características principales

* Arquitectura modular.
* API REST.
* Inyección de dependencias mediante **tsyringe**.
* Autenticación con JWT.
* Autorización mediante Roles y Permisos (RBAC).
* Protección de endpoints mediante middleware.
* Validación de acceso según permisos asignados.
* Conexión con Turso (libSQL).
* Manejo centralizado de errores.
* Separación de responsabilidades.
* Código escalable y mantenible.
* Refresh Tokens.
* WebSockets para monitoreo en tiempo real.
* Notificaciones.
* Pruebas unitarias e integración.
* Documentación automática con Scalar.

---

# Arquitectura

El proyecto sigue una arquitectura basada en Domain Driver Desing (DDD) en capas para separar responsabilidades y facilitar el mantenimiento.

```text
Cliente
    │
    ▼
Routes 
    │
    ▼
Middlewares
(Authentication / Authorization)
    │
    ▼
Controllers
    │
    ▼
Services
    │
    ▼
Repositories
    │
    ▼
Turso (libSQL)
```

Cada capa tiene una responsabilidad específica:

* **Routes:** Definen los endpoints de la API.
* **Middlewares:** Validan autenticación y permisos.
* **Controllers:** Gestionan las solicitudes HTTP.
* **Services:** Implementan la lógica de negocio.
* **Repositories:** Acceden a la base de datos.
* **Database:** Persistencia de la información.

---

# Estructura del proyecto

```text
src
├───.ddd
├───Application
│   ├───dtos
│   ├───interfaces
│   ├───mappers
│   ├───services
│   └───utils
├───Domain
│   ├───entities
│   └───repositories
├───Infrastructure
│   ├───builders
│   ├───database
│   ├───interface
│   ├───repositories
│   ├───services
│   └───utils
├───shared
│   └───utils
└───WebApi
    ├───container
    ├───controllers
    ├───docs
    │   ├───paths
    │   └───schemas
    ├───middlewares
    └───routes
```

---

# Autenticación

La autenticación se realiza mediante **JSON Web Tokens (JWT) y OAUTH**.

Flujo:

1. El usuario inicia sesión.
2. Se validan las credenciales.
3. Se genera un JWT o en caso de tener habilitado el OAUTH se envia un codigo al email correspondiente.
4. El cliente almacena el token o escribe el codigo secreto que se pide en el FRONTEND.
5. Cada petición protegida envía el token en el encabezado:

```http
Authorization: Bearer <token>
```
6. Cada petición queda registrada en un sistema de LOGS para evitar perdida de rastros en operaciones.

El middleware valida:

* Integridad del token o codigo secreto.
* Expiración.
* Usuario válido.
* Registrar en LOGS la accion , usuario y endpoint relacionado a la operacion.

---

# Autorización basada en Roles (RBAC)

Una vez autenticado, el sistema valida los permisos del usuario antes de permitir el acceso a un recurso.

Ejemplo de roles:

* Administrador
* Agrónomo
* Técnico
* Operador

Ejemplo de permisos:

```text
users.create
users.update
users.delete

catalogs.create
catalogs.update
catalogs.delete

reports.read
reports.update
reports.generate

sensors.read

arduinos.create
```

Ejemplo de protección de rutas:

```typescript
app.use("/catalog", validateToken, catalogRoutes);
```

---

# Inyección de dependencias

El proyecto utiliza **tsyringe** para desacoplar las dependencias entre componentes.

Beneficios:

* Bajo acoplamiento.
* Fácil mantenimiento.
* Mayor facilidad para realizar pruebas.
* Mejor organización del código.

Ejemplo conceptual:

```typescript
@injectable()
class CultivationService {

    constructor(
        @inject(CultivationRepository)
        private repository: ICultivationRepository
    ){}

}
```

---

# Base de datos

La persistencia se realiza mediante **Turso (libSQL)**.

El backend almacena información relacionada con:

* Usuarios.
* Roles.
* Permisos.
* Empresas.
* Fincas.
* Parcelas.
* Cultivos.
* Ciclos de cultivo.
* Sensores.
* Lecturas de sensores.
* Diagnósticos.
* Subastas.
* Reportes.
* Logs.

---

# Seguridad

El sistema implementa múltiples mecanismos de seguridad:

* Contraseñas cifradas con bcrypt.
* Tokens JWT.
* OAUTH.
* Middleware de autenticación.
* Middleware de autorización.
* Validación de permisos.
* Variables sensibles protegidas mediante `.env`.
* Separación entre autenticación y autorización.

---

# Variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

Ejemplo:

```env
PORT=3000

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=1d

TURSO_DATABASE_URL=your_database_url

TURSO_AUTH_TOKEN=your_database_token
```

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/oscarMolina1523/agroControlBackend.git
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Compilar:

```bash
npm run build
```

Ejecutar producción:

```bash
npm start
```

---

# Scripts

Inicia el servidor en modo desarrollo.

```bash
npm run dev
```

Compila TypeScript.

```bash
npm run build
```

Ejecuta la aplicación compilada.

```bash
npm start
```

Analiza el código.

```bash
npm run lint
```

Formatea el código.

```bash
npm run format
```


---

# Flujo de una petición

```text
Cliente

    │

    ▼

Request

    │

    ▼

JWT Middleware

    │

    ▼

Authorization Middleware

    │

    ▼

Controller

    │

    ▼

Service

    │

    ▼

Repository

    │

    ▼

Turso Database

    │

    ▼

Response
```

---

# Principios aplicados

* Separación de responsabilidades.
* Arquitectura modular.
* Bajo acoplamiento.
* Inyección de dependencias.
* Seguridad por capas.
* Reutilización de componentes.
* Escalabilidad.
* Mantenibilidad.
* Clean Code.

---

# Integración con el Frontend

El backend expone una API REST que puede ser consumida por cualquier cliente HTTP, incluyendo aplicaciones web desarrolladas con React, Next.js o aplicaciones móviles.

Toda la lógica de negocio se mantiene centralizada en la API, mientras que el frontend se encarga exclusivamente de la presentación de la información y la interacción con el usuario.

---

# Autores

###

<p align="left">Desarrollador Oscar Molina<br>💼 Desarrollador Web<br>GitHub: @oscarMolina1523<br>linkedin: https://www.linkedin.com/in/oscar-molina-916195309<br><br>Desarrollador Joshua Chavez<br>💼 Desarrollador Web<br>GitHub: @benchav<br>linkedin: https://www.linkedin.com/in/joshua-benjamin-ch%C3%A1vez-lau-44a65534b</p>

###