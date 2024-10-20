# MealTicket Backend

MealTicket Backend es un servidor Node.js desarrollado con Express, GraphQL y MongoDB (Mongoose) que maneja un sistema de control de usuarios, roles y permisos, junto con autenticación basada en JWT. El backend está organizado de manera modular para permitir la escalabilidad y el mantenimiento fácil.

## Requisitos

- Node.js (versión 14 o superior)
- MongoDB (local o en la nube)

## Instalación

1. Clonar el repositorio:

```bash
git clone
```

2. Instalar las dependencias:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```bash
PORT=4000
MONGODB_URI=mongodb://localhost:27017/mealticket
JWT_SECRET=secret
```

4. Iniciar el servidor:

```bash
npm start
```

## Uso

El servidor se ejecutará en `http://localhost:4000`. Se puede acceder a la interfaz de GraphQL en `http://localhost:4000/graphql`.

## Estructura del Proyecto

```bash
mealticket-backend/
│
├── config/
│   └── db.js                       # Configuración de conexión a MongoDB
│
├── graphql/
│   ├── schema/
│   │   └── schema.js               # Esquema principal que une resolvers
│   ├── resolvers/
│   │   ├── UserResolver.js         # Resolver para usuarios
│   │   ├── roleResolver.js         # Resolver para roles
│   │   ├── permissionResolver.js   # Resolver para permisos
│   │   └── index.js                # Combina todos los resolvers
│   └── types/
│       ├── User.js                 # Definición del tipo Usuario
│       ├── Role.js                 # Definición del tipo Rol
│       └── Permission.js           # Definición del tipo Permiso
│
├── middlewares/
│   └── auth.js                     # Middleware de autenticación JWT
│
├── models/
│   ├── Permission.js               # Modelo de MongoDB para permisos
│   ├── Role.js                     # Modelo de MongoDB para roles
│   └── User.js                     # Modelo de MongoDB para usuarios
│
├── .env                            # Variables de entorno
├── .eslintrc.json                  # Configuración de ESLint
├── .gitignore                      # Archivos y directorios ignorados por Git
├── .prettierrc                     # Configuración de Prettier
├── index.js                        # Carga dotenv y configura el servidor
├── package-lock.json               # Dependencias fijadas
├── package.json                    # Dependencias y scripts
└── README.md                       # Documentación del proyecto
```

## Autenticación JWT

El servidor utiliza autenticación basada en JWT (JSON Web Tokens) para proteger las rutas y controlar el acceso a los recursos. Para acceder a las rutas protegidas, se debe incluir el token JWT en la cabecera de la petición HTTP:

```bash
Authorization
Bearer <token>
```

## Licencia

Este proyecto está licenciado bajo la licencia MIT.
