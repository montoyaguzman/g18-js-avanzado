// localhost:8080 => JSON { message: "hola desde el index" } => 200
// localhost:8080/patitos => JSON { data: [ { name: "donald"}, { name: "lucas"} ] } => 200
// localhost:8080/pokemones => texto plano de not found => 404
// localhost:8080/admin => 401 

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    // Paso 1: Obtener la path de la request
    const urlObject = url.parse(request.url);
    const path = urlObject.path;
    console.log(`Path solicitada: `, path);

    // Paso 2: Definimos las variables que le vamos a setear a la response
    let status = 0;
    let responseObj = {};
    let mimeType = { 'Content-Type' : 'application/json' };

    // Paso 3: (CONTROLLER) Manejador de las peticiones
    if (path === '/') {
        // paso 3.1 conectarse a la bd y hacer la operacion real y obtener
        // resultados reales para el mensaje y el status
        responseObj = { message: "hola desde el index" };
        status = 200;
    } else if (path === '/patitos') {
        responseObj = { data: [ { name: "donald"}, { name: "lucas"} ] };
        status = 200;
    } else if (path === '/pokemones') {
        responseObj = 'no encontrado';
        mimeType = { 'Content-Type' : 'text/plain' };
        status = 404;
    } else if (path === '/admin') {
        responseObj = {};
        status = 401;
    } else {
        responseObj = { message: 'Internal server error' };
        status = 500;
    }

    // Paso 4: Convertir el objeto de salida en un string
    const stringResponse  = JSON.stringify(responseObj);

    // Paso 5: Regresar la respuesta al cliente
    response.writeHead(status, mimeType);
    response.write(stringResponse);
    response.end();

});

server.listen(8080);

console.log('API en node...');
console.log('Esperando peticiones....');
