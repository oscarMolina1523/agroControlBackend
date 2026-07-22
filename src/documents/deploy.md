# Despliegue del Backend en Vercel

## Objetivo

Desplegar el backend desarrollado en **Node.js + Express + TypeScript** utilizando **Vercel** mediante la línea de comandos (CLI).

---

# Tecnologías

- Node.js v24.13.1
- Express 5
- TypeScript 5.9.2
- Vercel CLI 56.5.0

---

# 1. Verificar Node.js

Comprobar que Node.js se encuentre instalado.

```bash
node -v
```

Resultado esperado

```text
v24.13.1
```

Verificar npm

```bash
npm -v
```

---

# 2. Instalar Vercel CLI

Instalar la herramienta de despliegue.

```bash
npm install -g vercel
```

Verificar instalación

```bash
vercel --version
```

Resultado esperado

```text
Vercel CLI 56.5.0
```

---

# 3. Instalar dependencias

Desde la raíz del proyecto ejecutar

```bash
npm install
```

---

# 4. Compilar el proyecto

Antes de desplegar es recomendable comprobar que TypeScript compile correctamente.

```bash
npm run build
```

Resultado esperado

```text
> tsc
```

---

# 5. Iniciar sesión en Vercel
<img width="1117" height="681" alt="login" src="https://github.com/user-attachments/assets/8c59187b-0fa7-465f-80b2-114ff4fe5ee8" />


```bash
vercel login
```

Seleccionar el proveedor de autenticación (GitHub, Google, Email, etc.) y completar el inicio de sesión desde el navegador.

---

# 6. Crear el proyecto en Vercel

Ejecutar

```bash
vercel
```

Responder las preguntas del asistente.

```text
Which project?
Create a new project

Name?
agro-control-backend

Customize advanced settings?
Yes

Want to use the default Deployment Protection settings?
No

Vercel Authentication
Standard

Connect detected Git repository?
No
```

Al finalizar se obtiene una URL temporal del proyecto.

---

# 7. Despliegue en producción

Una vez verificada la compilación se realizó el despliegue definitivo.

```bash
vercel --prod
```

Vercel generó automáticamente la URL pública del backend.

---

# Configuración del proyecto

## package.json

Scripts utilizados

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/main.js",
    "dev": "tsx watch src/server.ts"
  }
}
```

---

## tsconfig.json

Configuración principal

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "Commonjs",
    "target": "ES2020",
    "strict": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

---

## api/index.ts

Archivo utilizado por Vercel para exponer la aplicación Express como Serverless Function.

```typescript
import app from "../src/main";

export default app;
```

---

## src/main.ts

La aplicación Express exporta únicamente la instancia de la aplicación.

```typescript
const app = express();

export default app;
```

Es importante **no utilizar**:

```typescript
app.listen(...)
```

dentro de este archivo, ya que Vercel administra automáticamente el servidor HTTP.

---

## vercel.json

Configuración utilizada para enrutar todas las solicitudes hacia la función principal.

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "api/index.ts"
    }
  ]
}
```

---

# Comandos utilizados

Instalar Vercel

```bash
npm install -g vercel
```

Compilar

```bash
npm run build
```

Construcción local

```bash
vercel build
```

Desplegar

```bash
vercel --prod
```

Ver despliegues

```bash
vercel ls
```

Inspeccionar un despliegue

```bash
vercel inspect <deployment-url>
```

Consultar registros

```bash
vercel logs <deployment-url>
```
