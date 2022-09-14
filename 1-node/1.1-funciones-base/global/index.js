console.log(this); // {} o module.exports
console.log('Ruta donde esta mi archivo: ', __dirname);
console.log('Ruta + nombre de mi archivo: ', __filename);
// module: Referencia al módulo actual.
// exports: Para exportar modulos (archivos).
// require(): Importa un archivo js como modulo. require('index.js');