const http = require('http');
const url = require('url');
const fs = require('fs');
// const colors = require('colors');

const CONTENT_TYPE = 'Content-Type';
const MIME_TYPES = {
    html: 'text/html',
    css: 'text/css',
    jpg: 'image/jpg',
    ico: 'image/x-icon',
    mp3: 'audio/mpeg3',
    mp4: 'video/mp4',
    json: 'application/json'
};
// MIME_TYPES.html
// MIME_TYPES['html']

const server = http.createServer((request, response) => {
    
    // Paso 1: Obtener la path de la request
    const urlObject = url.parse(request.url);
    const path = urlObject.path;

    // Paso 2: Definimos las variables que le vamos a setear a la response
    let status = 0;
    let responseObj = {};
    let fileSytemPath = '';

    // Paso 3: Validamos la existencia de path para concatenarle "static"
    if (path) {
        fileSytemPath = `static${path}`
    }
    console.log(`Path solicitada: `, fileSytemPath);

    // Paso 4: Validar si existe la path en el sistema
    fs.stat(fileSytemPath, error => {
        if (!error) {
            // Paso 5: Leer el archivo multimedia solicitado
            fs.readFile(fileSytemPath, (error, file) => {
                if (!error) {
                    // fileSytemPath = index.html
                    status = 200;
                    const aux = fileSytemPath.split('.'); // index.html => ['index', 'html']
                    const extension = aux[ aux.length - 1 ];
                    const mimeType = MIME_TYPES[extension]; // MIME_TYPES.html;
                    // Paso 5.1: Devolver el archivo solicitado
                    response.writeHead(status, { [CONTENT_TYPE] : mimeType } );
                    response.write(file);
                    response.end();        
                } else {
                    // Paso 5.1: Devolver un error si no se puede leer el archivo
                    status = 500;
                    responseObject = { message: 'Internal server error' };
                    response.writeHead(status, { [CONTENT_TYPE] : MIME_TYPES.json } );
                    response.write(responseObject);
                    response.end();        
                }
            });
        } else {
            // Paso 5.1: Devolver un error de lectura del archivo
            console.log('error:', error)
            status = 404;
            responseObject = { message: 'Not found' };
            response.writeHead(status, { [CONTENT_TYPE] : MIME_TYPES.json } );
            response.write(responseObject);
            response.end();
        }
    });

    

});

server.listen(9000);
console.log('API en node...');
console.log('Esperando peticiones....');
