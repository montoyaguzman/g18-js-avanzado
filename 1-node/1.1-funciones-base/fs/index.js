const fs = require('fs');

// Para cambiar los permisos de un archivo
fs.chmod(path, mode, callback);

// Para cambiar el usuario dueño de un archivo
fs.chown(path, uid, gid, callback);

// Para escribir y crear un archivo
fs.writeFile(file, data[, options], callback);

// Abrir un archivo
fs.open(path[, flags[, mode]], callback);

// Abrir un directorio
fs.opendir(path[, options], callback);

// Leer un archivo
fs.readFile(path[, options]);

// Ejecuta un callback en una path
fs.realpath(path[, options], callback);

// Renombrar un archivo
fs.rename(oldPath, newPath, callback);

// Elimina un directorio
fs.rmdir(path[, options], callback);

// Elimina un archivo
fs.rm(path[, options], callback);
aksjnsnajksan