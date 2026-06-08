# Plan de Trabajo Paso a Paso: Sistema de Ventas - Almacén

## Proyecto Final Node.js (Valor: 40 Puntos) | Fecha Límite: 12/06/2026

Este documento contiene una guía detallada, ultra-desglosada y secuencial para construir tu proyecto final de forma incremental. Las tareas están diseñadas para ser sumamente pequeñas y accesibles, ideales para personas en proceso de aprendizaje. Sigue este orden para estructurar correctamente tu backend y luego desarrollar la interfaz gráfica en la carpeta `public`.

---

## 📂 FASE 1: Estructura Base y Almacenamiento Simulado

_Objetivo: Configurar tu espacio de trabajo inicial y estructurar los archivos de datos requeridos por el proyecto._

- [x] **Tarea 1.1:** Crea una carpeta principal en tu computadora para el proyecto (por ejemplo, `proyecto-sistema-ventas`).
- [x] **Tarea 1.2:** Abre la terminal de tu editor de código, navega hasta esa carpeta y ejecuta el comando `npm init -y` para inicializar el archivo `package.json`.
- [x] **Tarea 1.3:** Instala la librería Express ejecutando `npm install express` en tu terminal.
- [x] **Tarea 1.4:** Crea un archivo llamado `server.js` (o `app.js`) en la raíz del proyecto. Este será el punto de entrada de tu servidor.
- [x] **Tarea 1.5:** Crea una carpeta llamada `database` en la raíz del proyecto para simular la base de datos local.
- [ x] **Tarea 1.6:** Dentro de la carpeta `database/`, crea un archivo llamado `usuarios.json` que contenga un arreglo vacío: `[]`.
- [x] **Tarea 1.7:** Dentro de `database/`, crea un archivo llamado `productos_disponibles.json` e introduce una lista inicial de 3 a 5 productos de prueba (cada uno con `id`, `nombre`, `precio`, `descripcion`, `categoria`, `stock` e `imagenes`).
- [ ] **Tarea 1.8:** Dentro de `database/`, crea un archivo llamado `productos_vendidos.json` inicializado con un arreglo vacío: `[]`.
- [ ] **Tarea 1.9:** Dentro de `database/`, crea un archivo llamado `clientes.json` inicializado con un arreglo vacío: `[]`.
- [ ] **Tarea 1.10:** Inicializa tu repositorio de Git ejecutando el comando `git init` en la raíz del proyecto.

📌 **PUNTO DE COMMIT GIT:**
Ejecuta los siguientes comandos en tu terminal:
`git add .`
`git commit -m "Inicializar proyecto, estructura de carpetas y base de datos simulada"`

---

## 🔒 FASE 2: Backend - Autenticación y Sesiones

_Objetivo: Implementar los servicios que permitirán el registro seguro y el inicio de sesión de los usuarios._

- [x] **Tarea 2.1:** Configura un servidor Express básico dentro de `server.js` que escuche en el puerto 3000 y muestre un mensaje en la consola.
- [x] **Tarea 2.2:** Permite que tu servidor reciba y entienda datos en formato JSON agregando la línea `app.use(express.json());` antes de tus rutas.
- [ ] **Tarea 2.3:** Instala la librería para encriptar contraseñas ejecutando `npm install bcryptjs` en la terminal.
- [ ] **Tarea 2.4:** Instala la librería para manejo de tokens de sesión ejecutando `npm install jsonwebtoken` en la terminal.
- [ ] **Tarea 2.5:** Crea la estructura de una ruta POST para el registro en el archivo `server.js`: `app.post('/api/auth/register', (req, res) => { ... });`.
- [ ] **Tarea 2.6:** En la ruta de registro, extrae los parámetros `nombre`, `email` y `contraseña` del cuerpo de la petición (`req.body`).
- [ ] **Tarea 2.7:** Utiliza la función para encriptar la contraseña recibida antes de proceder a guardarla.
- [ ] **Tarea 2.8:** Lee el archivo `database/usuarios.json`, agrega el nuevo usuario con su contraseña ya oculta/encriptada y vuelve a escribir el archivo actualizado.
- [ ] **Tarea 2.9:** Crea la estructura de una ruta POST para el inicio de sesión: `app.post('/api/auth/login', (req, res) => { ... });`.
- [ ] **Tarea 2.10:** En la ruta de login, busca si el `email` coincide con alguno en tu JSON. Si existe, verifica si la contraseña coincide con la encriptada.
- [ ] **Tarea 2.11:** Si la autenticación es exitosa, genera un token e incorpóralo dentro de la respuesta JSON para que el cliente mantenga la sesión activa.

📌 **PUNTO DE COMMIT GIT:**
Ejecuta los siguientes comandos en tu terminal:
`git add .`
`git commit -m "Implementar rutas de registro, login, encriptación de contraseñas y generación de tokens"`

---

## ⚙️ FASE 3: Backend - Endpoints del Sistema (API de Ventas y Almacén)

_Objetivo: Programar los endpoints que consultarán información de productos y procesarán las órdenes de compra._

- [ ] **Tarea 3.1:** Crea una ruta `GET /api/productos` que se encargue de leer el archivo `productos_disponibles.json` y devuelva el listado completo de mercancía al frontend.
- [ ] **Tarea 3.2:** Crea una ruta dinámica `GET /api/productos/:id` que reciba el ID de un artículo específico, filtre la lista y retorne su información detallada.
- [ ] **Tarea 3.3:** Crea una ruta `POST /api/ventas` encargada de procesar las compras que se realicen desde el carrito de compras.
- [ ] **Tarea 3.4:** En la lógica de la ruta de ventas, haz que se reste la cantidad adquirida del stock disponible en `productos_disponibles.json`.
- [ ] **Tarea 3.5:** Registra los detalles de la compra dentro del archivo `productos_vendidos.json`.
- [ ] **Tarea 3.6:** Si la transacción es exitosa, responde con un código HTTP `200` o `201`.
- [ ] **Tarea 3.7:** Crea una ruta `GET /api/almacen/pendientes` que devuelva exclusivamente las órdenes cuyo estado sea "Pendiente".
- [ ] **Tarea 3.8:** Crea una ruta `PUT /api/almacen/despachar/:id` que capture el ID de una venta específica y cambie su estado a "Despachado".

📌 **PUNTO DE COMMIT GIT:**
Ejecuta los siguientes comandos en tu terminal:
`git add .`
`git commit -m "Crear endpoints para consulta de productos, procesamiento de ventas y gestión de almacén"`

---

## 🎨 FASE 4: Frontend - Configuración Pública e Inicio de Sesión

_Objetivo: Preparar el entorno para archivos estáticos e implementar el formulario web de acceso._

- [ ] **Tarea 4.1:** En tu archivo principal `server.js`, añade la línea `app.use(express.static('public'));` para indicarle a Express que sirva contenido estático desde una carpeta pública.
- [ ] **Tarea 4.2:** Crea una carpeta llamada `public` en la raíz exacta del proyecto. Todos los pasos frontends subsecuentes se construirán estrictamente aquí dentro.
- [ ] **Tarea 4.3:** Dentro de la carpeta `public/`, crea tres archivos iniciales: `index.html`, `styles.css` y `auth.js`.
- [ ] **Tarea 4.4:** En `index.html`, utiliza HTML5 semántico (`<header>`, `<main>`, `<section>`, `<form>`, `<input>`, `<button>`) para estructurar formularios dedicados al Login y al Registro.
- [ ] **Tarea 4.5:** En el archivo `styles.css`, implementa Flexbox para centrar adecuadamente la caja de autenticación en pantalla y garantizar que sea adaptable (Responsive Design).
- [ ] **Tarea 4.6:** Vincula el archivo script agregando `<script src="auth.js"></script>` en tu `index.html`.
- [ ] **Tarea 4.7:** En `auth.js`, añade escuchadores de eventos para prevenir el comportamiento por defecto de los formularios al enviarlos.
- [ ] **Tarea 4.8:** Usa la API `fetch()` para enviar los campos de registro mediante una petición POST a `/api/auth/register` y notifica el resultado.
- [ ] **Tarea 4.9:** Usa `fetch()` para enviar las credenciales de ingreso a `/api/auth/login`. Si la respuesta es exitosa, almacena el token de sesión devuelto dentro del `localStorage` del navegador y redirige al usuario a la interfaz comercial.

📌 **PUNTO DE COMMIT GIT:**
Ejecuta los siguientes comandos en tu terminal:
`git add .`
`git commit -m "Crear interfaz de inicio de sesión y conectar con la API de autenticación"`

---

## 🛍️ FASE 5: Frontend - Área de Ventas y Vista de Producto Individual

_Objetivo: Diseñar el catálogo comercial principal y desplegar la información pormenorizada de cada artículo._

- [ ] **Tarea 5.1:** Dentro de la carpeta `public/`, crea los archivos `ventas.html` y su correspondiente script `ventas.js`.
- [ ] **Tarea 5.2:** En `ventas.html`, estructura un diseño que incluya un menú de navegación semántico (`<nav>`) para filtrar por categorías y un contenedor dinámico.
- [ ] **Tarea 5.3:** En `ventas.js`, programa una función que se ejecute al cargar la página para hacer un `fetch()` a la ruta del backend `/api/productos`.
- [ ] **Tarea 5.4:** Recorre el arreglo de productos recibido y genera dinámicamente tarjetas HTML incrustando la imagen del producto, nombre, precio destacado y un botón con la leyenda "Ver Detalle".
- [ ] **Tarea 5.5:** Aplica reglas en `styles.css` con Flexbox y Media Queries para que las tarjetas del catálogo se reordenen automáticamente.
- [ ] **Tarea 5.6:** Dentro de `public/`, crea el archivo `producto.html` junto con su script `producto.js`.
- [ ] **Tarea 5.7:** Haz que al presionar "Ver Detalle" en el catálogo, el usuario sea redirigido a la vista individual de ese artículo.
- [ ] **Tarea 5.8:** En `producto.js`, lee los parámetros de la URL para extraer el ID, solicita los datos puntuales a `/api/productos/:id` y renderiza en pantalla descripciones completas y selectores interactivos para variaciones como tamaño y color.

📌 **PUNTO DE COMMIT GIT:**
Ejecuta los siguientes comandos en tu terminal:
`git add .`
`git commit -m "Desarrollar vistas del catálogo de productos y detalles de producto individual"`

---

## 🛒 FASE 6: Frontend - Lógica del Carrito de Compras

_Objetivo: Administrar la selección temporal de productos, cálculos de costes y finalización del pedido._

- [ ] **Tarea 6.1:** En tu archivo `ventas.js`, declara una estructura en memoria (o usa `localStorage`) para gestionar los elementos elegidos.
- [ ] **Tarea 6.2:** Crea una función que busque el producto por su identificador único para agregarlo al carrito o incrementar su cantidad.
- [ ] **Tarea 6.3:** Diseña un panel lateral (Sidebar) o sección dedicada en `ventas.html` para renderizar la lista detallada con los nombres, precios y subtotales.
- [ ] **Tarea 6.4:** Añade botones individuales de suma `+` y resta `-` al lado de cada producto en el carrito para actualizar sus cantidades o removerlos.
- [ ] **Tarea 6.5:** Desarrolla una función integradora que calcule la sumatoria total a pagar actualizándose en tiempo real.
- [ ] **Tarea 6.6:** Incluye un campo de entrada de texto para ingresar códigos de descuento predefinidos.
- [ ] **Tarea 6.7:** Añade el botón definitivo "Realizar Venta". Programa su evento de click para que envíe el carrito mediante un `fetch()` con método POST hacia la URL `/api/ventas`.
- [ ] **Tarea 6.8:** Maneja la respuesta devuelta por el servidor: si es exitosa, despliega una alerta nativa `alert("¡Compra guardada con éxito!")` y vacía por completo el estado del carrito; si falla, captura el error y notifícalo.

📌 **PUNTO DE COMMIT GIT:**
Ejecuta los siguientes comandos en tu terminal:
`git add .`
`git commit -m "Implementar lógica del carrito de compras y procesamiento de ventas en el frontend"`

---

## 📦 FASE 7: Frontend - Área de Almacén y Control de Despachos

_Objetivo: Construir el módulo de administración física donde se procesará la salida de los productos vendidos._

- [ ] **Tarea 7.1:** Dentro de la carpeta `public/`, crea los archivos finales de interfaz administrativa: `almacen.html` y `almacen.js`.
- [ ] **Tarea 7.2:** En `almacen.html`, diseña una maquetación clara y limpia estructurando bloques organizados para listar el flujo logístico de pedidos pendientes.
- [ ] **Tarea 7.3:** En el archivo `almacen.js`, realiza una petición GET vía `fetch()` a la ruta `/api/almacen/pendientes` al cargar la página.
- [ ] **Tarea 7.4:** Por cada registro de venta pendiente devuelto, genera dinámicamente una tarjeta que desglose organizadamente: ID del pedido, detalles del cliente, ítems comprados y las unidades.
- [ ] **Tarea 7.5:** Agrega de forma obligatoria un botón prominente con la etiqueta "Despachar" dentro de cada tarjeta generada.
- [ ] **Tarea 7.6:** Enlaza el evento click de dicho botón para disparar una llamada asíncrona hacia la ruta encargada de despachar pedidos.
- [ ] **Tarea 7.7:** Tras recibir una confirmación positiva, ejecuta nuevamente la función de consulta de pendientes para remover de forma inmediata la tarjeta procesada de la vista.

📌 **PUNTO DE COMMIT GIT:**
Ejecuta los siguientes comandos en tu terminal:
`git add .`
`git commit -m "Crear panel de almacén para visualización y despacho de productos vendidos"`

---

## 📝 FASE 8: Documentación Técnica, Puliendo Detalles y Despliegue

_Objetivo: Cumplir rigurosamente con los criterios de evaluación técnicos, documentar decisiones y habilitar el entorno en vivo._

- [ ] **Tarea 8.1:** Crea un archivo de texto plano Markdown denominado `README.md` (o un documento PDF) para tu documentación técnica.
- [ ] **Tarea 8.2:** Redacta una explicación clara de tus decisiones de diseño, las tecnologías utilizadas y tu estructura de carpetas escalable.
- [ ] **Tarea 8.3:** Detalla cuáles fueron los mayores desafíos superados a lo largo del desarrollo y cómo los resolviste.
- [ ] **Tarea 8.4:** Realiza una revisión de tu código: limpia instrucciones de depuración (`console.log`) y valida que se respete el uso de etiquetas de HTML5 semántico.
- [ ] **Tarea 8.5:** Sube el estado final de tu repositorio local hacia una plataforma en la nube (como GitHub o GitLab).
- [ ] **Tarea 8.6:** Configura un servicio en un proveedor de hosting gratuito (por ejemplo, Render o Vercel).
- [ ] **Tarea 8.7:** Vincula tu repositorio remoto con la plataforma de hosting seleccionada para compilar tu aplicación y generar una Demostración en Vivo.
- [ ] **Tarea 8.8:** Haz una prueba final usando la URL pública en producción comprobando que no ocurra ningún fallo.

📌 **PUNTO DE COMMIT GIT FINAL:**
Ejecuta los siguientes comandos en tu terminal para cerrar el ciclo de desarrollo:
`git add .`
`git commit -m "Agregar documentación técnica y preparativos finales para demostración en vivo"`
