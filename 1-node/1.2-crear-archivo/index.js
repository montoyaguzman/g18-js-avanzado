const fs = require('fs');

const path = './';
const fileName = 'my-file.txt';
const contentFile = 'ya queremos ir a receso';
const destination = `${path}${fileName}`;

fs.writeFile(destination, contentFile, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('archivo creado con exito! :) ');
    }
});
