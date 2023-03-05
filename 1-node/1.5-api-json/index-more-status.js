// PETICIONES
// 200 OK
// 201 Created
// 204 No content
// 401 Unatuhorized
// 403 Forbidden
// 404 Not found
// 500 Internal server error

const http = require('http');
const url = require('url');
const colors = require('colors');

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
    if (path === '/') { // 200
        // paso 3.1 conectarse a la bd y hacer la operacion real y obtener
        // resultados reales para el mensaje y el status
        responseObj = { message: 'OK' };
        status = 200;
    } else if (path === '/new-card') { // 201
        responseObj = { message: 'Created' };
        status = 201;
    } else if (path === '/do-login') { // 204
        responseObj = {};
        status = 204;
    } else if (path === '/delete-admin') { // 401
        responseObj = {};
        status = 401;
    } else if (path === '/modify-admin') { // 403
        responseObj = {};
        status = 403;
    } else if (path === '/loquesea.txt') { // 404
        responseObj = { message: 'no encontre el txt' };
        status = 404;
    } else { // 500
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

console.log('API en node...'.rainbow);
console.log('Esperando peticiones....'.yellow);
