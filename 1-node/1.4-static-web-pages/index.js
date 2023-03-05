// URL 1 localhost:8080 => index.html
// URL 2 localhost:8080/patito.html => pagina1.html
// URL 3 localhost:8080/pagina2.html => pagina2.html
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    
    const urlObject = url.parse(request.url);
    console.log(urlObject);
    // const path = urlObject.path;
    const { path } = urlObject; // destructuring
    let fileSystemPath = '';

    if (path === '/') {
        fileSystemPath = 'static/index.html'
    } else {
        fileSystemPath = `static${path}`;
    }
    // fs.statSync
    fs.stat(fileSystemPath, error => {
        if (!error) {
            // OK
            // fs.readFileSync
            fs.readFile(fileSystemPath, (error, file) => {
                if (!error) {
                    const status = 200; // OK
                    const mymeType = { 'Content-type': 'text/html' };
                    response.writeHead(status, mymeType);
                    response.write(file);
                    response.end();
                } else {
                    const status = 500; // Internal server error
                    const mymeType = { 'Content-type': 'text/plain' };
                    response.writeHead(status, mymeType);
                    response.write('Error en el servidor');
                    response.end();
                }
            })
        } else {
            const status = 404; // Not found
            const mymeType = { 'Content-type': 'text/plain' };
            response.writeHead(status, mymeType);
            response.write('No encontrado');
            response.end();
        }
    })

});

server.listen(8080);
console.log('servidor ejecutandose...');
