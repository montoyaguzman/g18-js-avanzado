const os = require('os');

console.log('Version detalla del sistema: ', os.version());
console.log('Nombre de la versión del sistema: ', os.platform());
console.log('Numero de la versión del sistema:' + os.release());

console.log('Arquitectura: ', os.arch()); 
console.log('Número de procesadores lógicos:' + os.cpus().length);
console.log('Información acerca de los cpus: ', os.cpus());
console.log('Memoria libre en bytes', os.freemem()); 
console.log('Carpeta del usuario actual: ', os.homedir()); 
console.log('Mi direccion ip o mi hostname (local): ', os.hostname()); 

