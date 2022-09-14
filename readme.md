# JavaScript Avanzado

## Table of Contents

1. [Node](#node)
2. [Npm y paquetes](#npm-y-paquetes)
3. [Node para front y back end](#node-para-front-y-back-end)
4. [Arquitectura de software](#arquitectura-de-software)
5. [Stacks de desarrollo web](#stacks-de-desarrollo-web)
6. [Asincronía y Event Loop](#asincronía-y-event-loop)
7. [Comparativa entre Node vs JavaScript](#node)
8. [Conceptos de una API](#conceptos-de-una-api)
9. [Qué es REST y sus principios](#qué-es-rest-y-sus-principios)
10. [API Rest](#api-rest)
11. [ExpressJS](#expressjs)
12. [Deploys](#deploys)
13. [Notas adicionales](#notas-adicionales)
14. [Herramientas](#herramientas)
15. [Glosario](#glosario)

### Node

Node es un entorno multiplataforma para ejecutar JavaScript fuera del navegador, tiene su origen en el 2009 (Ryan Lenhiart).

#### **Instalación**

[Descargar LTS](https://nodejs.org/es/download/)
node -v
npm -v

**Versiones válidas:** 12.x.x, 14.x.x y 16.x.x

#### **Que se puede hacer con node**

- Realizar API Rest.
- Acceder a bases de datos relacionales y no relacionales.
- Generar páginas dinámicas en un servidor web. => server side render
- Crear, leer y escribir archivos.
- Procesar y almacenar archivos enviados desde una página web.

**Elementos de node**

Dentro de node se utilizan los módulos y las callbacks.

- **Módulo:** Permiten aislar parte de nuestro código en diferentes archivos y mandarlos llamar sólo cuándo los necesitamos.

  Existen dos **formas de utilizar módulos** en node:

  - Commun JS.
  - ES6 Imports.
- **Callback:** Es una funcion que se pasa como parametro a otra funcion.

#### Diferencias entre Node y JS

**Javascript**

* Funciona en el navegador.
* JS + web api.
  * fetch.
  * settimeout.
  * addeventlistener.
  * localstorage.

**Node**

* Funciona en el servidor.
* JS + modulos de node.
  * http.
  * os.
  * fs.
  * global.
  * path.

**Modelo cliente servidor**

Es un modelo de arquitectura donde mediante ciertos procolos existen la comunicación en internet. Por un lado, el servidor es una aplicación que ofrece un servicio, mientras que un cliente es quien pide el servicio.

**Path**

Una ruta o path indica una ubicación a nivel de carpeta de algun fichero dentro del
sistema de archivos.
**Ejemplos de rutas**

```
/# Raiz
/

/# Significa ahi mismo
./

/# Regresar un nivel de carpetas../
../../
```

**Mime Types**
Los mime types indican la naturaleza y formato de los archivos que son transmitidos en la respuesta de una solicitud web.

- json: 'application/json'.
- text: 'text/plain'.
- html: 'text/html'.
- css: 'text/css'.
- jpg: 'image/jpg'.
- ico: 'image/x-icon'.
- mp3: 'audio/mpeg3'.
- mp4: 'video/mp4'.

Para ver el listado completo [consulte](https://docs.w3cub.com/http/basics_of_http/mime_types/complete_list_of_mime_types.html).

**Localhost**

Es la dirección de mi propio computador (http://localhost:8080), también se le conoce como dirección loopback (http://127.0.0.1:8080).

### Npm y paquetes.

Node package manager es un manejador de paquetes de node y gestor de dependencias de proyectos npm. Se compone de:

* Un repositorio de paquetes.
* Un CLI para interactuar con el repo y el proyecto.

#### **Paquetes**

Son módulos distribuidos en forma de librerías que resuelven alguna necesidad de desarrollo.

#### **Scripts**

Son comandos propios que se pueden agregar al package.json para poderlos ejercutar.

Estructura de un proyecto npm

* **node_modules:** Carpeta donde se instalan las dependencias, normalmente está carpeta se agrega al .gitignore.
* **package.json:** Guardan las dependencias y los comandos de node.
* **package-lock.json:** Guarda un snapshot de las dependencias que se instalaron en un determinado momento.

#### **Listado de comandos npm**

```

# inicializar un proyecto
npm init

# instalar un paquete global
npm install -g packageName

# instalar todos las dependencias de un proyecto
npm i

# instalar un nuevo paquete sin agregarlo al package.json
npm install packageName

# instalar un nuevo paquete y agregarlo al package.json
npm install packageName --save

# instalar un paquete como dev dependency
npm install -D packageName

# desinstalar un paquete
npm uninstall packageName

# desintalar un paquete global
npm uninstall -g packageName

# ejecutar comandos custom
npm run myCommand

```

#### Otros gestores de dependencias

* Maven.
* Bower.
* Gradlew.
* Yarn.

#### Tipos de licencias de software

* MIT.
* ISC.

### Node para front y back end.

A continuación se presenta un listado de los framework front y back mas populares de nodeJS.

#### **Frameworks back end**

* [ExpressJS](https://expressjs.com/es/guide/routing.html).
* [Hapi](https://hapi.dev/tutorials/?lang=en_US).
* [Koa](https://devdocs.io/koa/).
* [Fastify](https://www.fastify.io/docs/latest/).

#### **Frameworks front end**

* [Gatsby](https://www.gatsbyjs.com/docs/).
* [EJS](https://ejs.co/#docs).
* [Nuxt](https://nuxtjs.org/docs/get-started/installation).
* [Next](https://nextjs.org/docs).
* [Hbs](https://bluuweb.github.io/node/20-hbs/).

#### **Semantic Versión**

Es un conjunto simple de reglas y requerimientos que dictan cómo asignar e incrementar los números de la versión de un software. Evitan la pérdida de versiones y mejoran la gestión de dependencias.

Dado un número de versión **MAJOR.MINOR.PATCH**, se incrementa:

* La versión **MAJOR** cuando realizas un cambio incompatible en el proyecto.
* La versión **MINOR** cuando añades funcionalidad que compatible con versiones anteriores.
* La versión **PATCH** cuando reparas errores compatibles con versiones anteriores.

### Arquitectura de software.

Es la estructura y forma en que los componentes de software o hardware se distribuyen y relacionan en el stack.

**Arquitecturas comunes**

* Cliente servidor.
* De tres niveles.
* Model View Controller: MVC.
* Dirigida por eventos.
* Microservicios.
* Serverless.

### Stacks de desarrollo web.

Un **stack** es el conjunto de tecnologías utilizadas para construir una aplicación.

#### **Stacks populares**

* LAMP.
* ASP.NET.
* MEAN.
* MERN.
* MEVN.

**Web components**
Encapsular funcionalidad en elementos especificos que sean reutilizables.

**Custom tag**
El nombre de la tag utilizada para un webcomponent. Ejemplos:

* `<my-menu>`
* `<Mymenu>`

#### Lenguajes de programación

* Java.
* JavaScript.
* Php.
* Python.
* Go.

#### Gestores de BD (SQL)

* SQL.
* Postgres.
* Oracle.
* MSSQLServer.
* MariaDB.
* MySQLalg.

#### Gestores de BD (No SQL)

* Mongo.
* DynamoDB.
* Firebase.
* Elasticsearchalg.

#### Servicios de cloud

* Azure.
* AWS.
* Google Cloud.

### Asincronía y Event Loop.

#### **Código síncrono**

Es aquel código donde cada instrucción se ejecuta en orden, línea a línea. Es código no depende de nadie y el event loop lo puede procesar sin detenerse.

#### **Código asíncrono**

Es aquel que tiene instrucciones que depende de algo externo (una api, una BD, escritura de archivos, etc). El event loop no se bloquea con este código y lo manda a formar a la fila de la web api. Cuando el event loop esta libre de tareas no dependientes, empieza a leer la fila ddde la web api y moverlas al queue, de donde comienza a ejecutar las tareas pendientes.

#### **Flujo de ejecución**

Cuando el event loop difiere el código y lo pone en espera, puede causar afectación en el flujo lógico de nuestro código, por ello es importante controlar ese flujo (asincronia) mediante callbacks, promises o async await (esta sintaxis luce como codigo sincrono).

**Ejemplo de operaciones asíncronas**

* Consulta una API.
* Crear archivos.
* Acceso a BD.

#### **Formas de manejar la asíncronia**

- **Callbacks:** Consiste en pasar una función como parámetro y ejecutarla en el momento que lo necesitemos.
- **Promesas:** Se envuelve el código asincrono en el objecto **new Promise**.  Se basan en 3 estados: cuándo se lanza la petición (pending) y sus posibles respuestas (resolve y reject).
- **Async await (ES6):** Función con la sugar syntaxis de es6 y simula que el código es asíncrono (por detrás sigue siendo una promesa).

### Comparativa entre Node vs JavaScript

* Ambos se basan en 0 retraso.
* No hay temporizador (setTimeout y setInterval).
* No hay manejo de eventos (eventListener).
* No hay solicitudes Ajax (consumo de API’s).
* Navegadores usan Libevent.
* Node usa Libuv.

### Conceptos de una API.

Application Programming Interface son mecanismos que permiten a dos componentes de software comunicarse entre sí mediante un conjunto de definiciones y protocolos. Comúnmente el formato de intercambio de datos utilizados es JSON o XML.

**XML**

```
`<name>`
    `<nombre>`Luke Skywalker `</nombre>`
    `<app>`172 `</app>`
    `<address>`
        `<street></street>`
            `<number>`
                `<int>`B `</int>`
                `<ext>`990 `</ext>`
            `</number>`
    `</address>`
`</name>`
```

**JSON**

```
{
	"name": "Luke Skywalker",
	"height": "172",
	"address": {
        	street: '',
        	number: { int: B, ext: 990 },
    	}
}
```

#### Conceptos de una API

* **Client:** Es quien realiza la petición.
* **Request:** Petición http conformada por url, params, payload.
* **Url:** Dirección de internet.
* **Payload:** Información que va en el body de la request.
* **Método o verbo:** Es la acción (GET, POST, PUT, PATCH y DELETE) con la que se accede a un endpoint.
* **Recurso:** Es el endpoint al que llegamos en la API.
* **Response:** Respuesta de la API.
* **Server:** Es quien responde la petición.

#### **Listado de protocolos**

* TCP/IP.
* HTTP.
* HTTPS.
* FTP.
* SMTP.
* IMAP.
* POP.
* SSL.
* TLS.

[Listado completo de puertos](https://docs.opencloud.cl/tutoriales/servidores/lista-de-puertos-mas-comunmente)

#### **Listado de status**

**100 Information**

* 100 Continue

**200 Success**

* 200 OK
* 201 Created
* 202 Accepted
* 204 No content

**300 Redirección**

* 304 Not modified

**400 Client Errors**

* 400 Bad request
* 401 Unauthorized
* 403 Forbidden
* 404 Not found
* 405 Not allowed method
* 408 Request timeout
* 409 Conflict

**500 Server Errors**

* 500 Internal server error
* 501 Not implemented
* 503 Service unavailable
* 504 Gate timeout

[Listado completo de estatus http.](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

### Qué es REST y sus principios.

Es una “evolución” de SOAP (servicios web). REST es una interfaz para conectar varios sistemas.

### API Rest.

Es una serie de principios que las API siguen para “volverse” API REST, cuándo cumplen todos los principios, se les conoce como API Restful.

* Client.
* Request.
* Contrato.
* Response.
* Server.

#### **Contrato de un API**

Es un conjunto de acuerdos entre cliente y servidor para establecer la comunicación.

* Interfaz.
* Método.
* Body y parametros (si aplican).
* Estatus de respuesta.
* Formato de intercambio de datos.

### ExpressJS.

[Documentation](https://expressjs.com/es/starter/installing.html).

#### Arquitectura de proyecto Node

```
src
│   index.js        # Entry point for application
└───config          # Application environment variables and secrets
└───controllers     # Express controllers for routes, respond to client requests, call services
└───loaders         # Handles all startup processes
└───middlewares     # Operations that check or maniuplate request prior to controller utilizing
└───models          # Database models
└───routes          # Express routes that define API structure
└───services        # Encapsulates all business logic
└───test            # Tests go here
```

Documentación capa controller.

Documentación de arquitectura node.

**Nombrado de constantes**

1. Si la constante es un valor fijo para comparar (if) o mostrar en pantalla
   debe ir en mayuscula.
   MXN, USD, PI, MAX_SIZE
2. Si la constante guarda un valor logico q se utiliza pero no muta ni trampoco
   es visible o comparable se debe declarar en minuscula.
   port

### Deploys.

* Heroku.
* Google App Engine.
* Back4App.
* Linode.
* Digital Ocean.
* Aws.

## Notas adicionales

### **Markdown**

Es un [lenguaje de marcado ligero](https://es.wikipedia.org/wiki/Lenguajes_de_marcas_ligeros "Lenguajes de marcas ligeros") creado por [John Gruber](https://en.wikipedia.org/wiki/John_Gruber "en:John Gruber") y [Aaron Swartz](https://es.wikipedia.org/wiki/Aaron_Swartz "Aaron Swartz") que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, se inspira en convenciones existentes para marcar mensajes de correo electrónico usando texto plano.

**Medidas de almacenamiento**
1024 bytes = 1 megabytes
1024 megabytes = 1 gygabytes
1024 gygabites = 1 terabytes

### Comandos Terminal

El **CMD** es la línea de comandos basada en MS-DOS para windows, mientras que la **terminal** es la línea de comandos de unix/lunix (kernel de mac os y algunas distribuciones linux).

Listado de comando

```
# imprime el path en el que se encuentra
pwd

# moverse entre carpetas
cd

# listar carpetas y archivos que hay en el directorio actual
ls

# crear carpetas
mkdir newFolder

# crear archivos
touch nameFile.txt

# eliminar carpetas
rmdir folderName

# eliminar archivos
rm fileName.txt

# comprobar conexión a internet
ping www.google.com

# limpiar la pantalla
clear

```

### Comandos Git

#### Commits Atómicos

Consiste en realizar un commit por un solo objetivo. Es decir, no mezclar muchas soluciones en el mismo commit.

#### Conventional Commits

Es una especificación sobre como escribir mensajes de confirmación (commits).

**Estructura**

```
[optional scope]: [optional body][optional footer(s)]
```

**Tipos principales**

* feat: Nuevas caracteristicas.
* chore: Cosas que no aportan un req funcional pero posiblemente si un req no funcional.
* fix: Correccion de errores.
* docs: Commits con documentacion o comentarios.
* style: Estructura de carpetas y nombrado.

#### Información del repo

```
# ver estado del working directory y staging area
git status

# ver historial de commits
git log --oneline
```

#### Generar llave ssh

```
# generar ssh key
ssh-keygen

# ver llave p[ublica
cat ~/.ssh/id_rsa.pub
```

#### Hacer un commit

```
# agregar al staging area
git add .

# quitar del staging area
git restore --staged namefile.txt

# hacer un commit al repo local
git commit -m "conventionalCommitScope: mi mensaje"

```

#### Remoto

```
# ver los repos remotos a los que esta conectado el repo local
git remote -v

# bajar cambios
git pull origin branchName

# subir cambios
git push origin branchName

# subir cambios de una rama nueva para el remoto
git push -u origin branchName

# obtener los cambios de una rama remota y cambiarse a esa rama
git fetch && git checkout develop

#  bajar cambios de una rama remota a una local (cuando ya existe)
git pull origin branchName

# agregar una direccion remoto (origin)
git remote add origin myUrl

# modificar una direccion remoto (origin)
git remote set-url origin myUrl

```

#### Administración de ramas

```
# ver rama en la que se encuentra el head
git branch 

# crea una rama nueva
git branch newBranchName 

# cambiarse a una rama con el nombre nombreRama
git checkout branchName

# crear y cambiarse a una nueva rama
git checkout -b newBranchName

# crear y cambiarse a una nueva rama
git switch -c newBranchName 

# eliminar una rama
git branch -D branchName

```

#### Otros comandos útiles

```
# Descarta los cambios del stagin y working directory
git reset --hard

# actualiza la cache de git para que tome ciertos cambios (.gitignore)
git rm --cached . r

# actualiza el mensaje del ultimo commit realizado (no debe estar pusheado)
git commit --amend -m "an updated commit message"

# stash: el codigo de working directory y staging area es eliminado temporalmente
git stash

# stash: el codigo de working directory y staging area que fue eliminado se recuperar
git stash pop

```

[Más info](https://www.conventionalcommits.org/en/v1.0.0/)

#### **VSCode como editor de git**

```
git config --global core.editor"visual studio --wait"
git commit
// ir a vscode a escribir el mensaje, una vez escrito guardar y cerrar.
// regresar a la consola a comprobar el commit

```

### Áreas de estudio

#### Arquitectura de software

Modelos de arquitectura, cliente servidor, mvc, eventos, etc.

#### Redes de computadora

Área donde se estudia la comunicación de redes de telecomunicaciones y funcionamiento del internet.

#### Sistemas operativos

Área donde se estudia la estructura de un sistema operativo y todo lo requerido para que opere en el hardware.

#### Testing

Es una área que se encarga de la automatización de pruebas del código.

Las pruebas es un proceso de evaluar un producto, mediante exploración y experimentación.

Entre menos entendemos un producto, tendrá mayores errores.

**Motivos para probar**

* Reducir costos.
* Cuidar el prestigio
* Mejoran la calidad de funcionalidad.
* Minimizan la posibilidad de malas experiencias de usuario.

**Por qué no se hacen siempre**

* No son parte de la solución.
* No se entrega evidencia al cliente.
* Pueden ser difíciles de mantener.
* No hay tiempo o conocimiento.

**Metodologías testing**

* TDD.
* BDD.

#### Arquitectura de computadoras

Área de estudio de la arquitectura física de las computadoras.

#### SysAdmin

Sysadmin suele ser el responsable de garantizar el correcto funcionamiento de toda plataforma tecnológica e informática de donde trabaja, trabajando incansablemente para ejecutar las necesarias actividades (implementaciones, actualizaciones o cambios) y mantener la operatividad del negocio.

#### DevOps

DevOps es un marco de trabajo y una filosofía en constante evolución que promueve un mejor desarrollo de aplicaciones en menos tiempo y la rápida publicación de nuevas o revisadas funciones de software o productos para los clientes.
Con DevOps se promueve una comunicación continua más fluida, la colaboración, la integración, la visibilidad y la transparencia entre equipos de desarrollo de aplicaciones (Dev) y sus homólogos en operaciones tecnológicas (Ops).

#### Machine Learning

El machine learning (aprendizaje automático) es una rama de la inteligencia artificial que permite que las máquinas aprendan sin ser expresamente programadas para ello. Una habilidad indispensable para hacer sistemas capaces de identificar patrones entre los datos para hacer predicciones. Esta tecnología está presente en un sinfín de aplicaciones como las recomendaciones de Netflix o Spotify, las respuestas inteligentes de Gmail o el habla de Siri y Alexa.

#### Big Data

Big Data es un término que describe el gran volumen de datos, tanto estructurados como no estructurados, que inundan los negocios cada día. Pero no es la cantidad de datos lo que es importante. Lo que importa con el Big Data es lo que las organizaciones hacen con los datos. Big Data se puede analizar para obtener ideas que conduzcan a mejores decisiones y movimientos de negocios estratégicos.

#### Recursos para estudiar

* [Cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf).
* [La guía sencilla](https://rogerdudler.github.io/git-guide/index.es.html).
* [Learning lab](https://lab.github.com/).
* [Curso de John Mircha node](https://www.youtube.com/watch?v=FeJVdCz_uco&list=PLlrxD0HtieHje-_287YJKhY8tDeSItwtg).

### Herramientas

* [Ip Pública](https://www.cual-es-mi-ip.net/).
* [Gitignore.io](https://www.toptal.com/developers/gitignore/).
* [Coder Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner).
* [Office Viewer(Markdown Editor)](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office).
* [Aprende Node.js y Express - Curso desde Cero](https://www.youtube.com/watch?v=1hpc70_OoAg).
* Documentación Ofline.
  * [Zeal (Windows)](https://zealdocs.org/download.html).
  * [Zeal (Linux)](https://zealdocs.org/download.html#linux).
  * [Dash (MacOS)](https://kapeli.com/dash).
* [Node.js para backend (en)](https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-backend).
* [Mintlify Doc Writer](https://marketplace.visualstudio.com/items?itemName=mintlify.document).
* [Metodo patito de goma](https://www.thebrain.school/metodo-patito-goma/#:~:text=Este%20m%C3%A9todo%2C%20incluso%20con%20entrada,pasaba%20inadvertido%20a%20sus%20ojos.).

### Glosario

- **Sistema operativo:** Es el software que coordina y dirige todos los servicios y aplicaciones que utiliza el usuario en una computadora.
- **Kernel:** El kernel es el núcleo de un sistema operativo y, por tanto, la interfaz (middleware) entre el software y el hardware.
- **Ip:** La dirección IP es una etiqueta numérica, por ejemplo "192.0.10.1" que identifica, de manera lógica y jerárquica, a una interfaz en la red. Existen IP públicas y IP privadas.
- **Dominio:**  Es una dirección web compuesta por un nombre de sitio web y una extensión de dominio. Ejemplo: google.com
- **URL:** Es una dirección web compuesta por al menos el protocolo, dominio y ruta.
- **DNS:** Es un tipo de servidor de redes de computadora que en encarga de convertir direcciones web en dominios IP y viceversa. Ejemplo: 8.8.8.8 => www.google.com
- **Cliente:** Es quien solicita información dentro de un sistema informatico.
- **Request:** Es una solicitud de información.
- **Response:** Es la entrega de información de un servidor a un cliente.
- **Servidor:** Es una instancia fisica o lógica que responde peticiones (request).
- **Estándar:** Es un patrón o modelo a seguir, generalmente derivado de un documento o certificación.
- **Buena práctica:** Es un actividad que se ha demostrado que funciona bien y produce buenos resultados, y, por lo tanto, se recomienda como modelo.
- **Path:** Es una ruta o dirección donde se encuentra alojado un recurso en un sistema de archivos. Existen rutas relativas como ../../my-docs o absolutas como C:\users\juan\Documents\tarea\tesis.doc
- **Puerto:** un lugar donde se abre una conexion para acceder a un servicio.
- **Dummy:** Es un dato o elemento de prueba, sirve para simular datos.
