// 1 Importaciones de componentes necesarios
const express = require('express');
const colors = require('colors');
// 2 Declaración de variables para levantar el servidor
const app = express();
const port = 3000;
// 3 Obtener los routes
const routerApi = require('./routes/main.controller');
// 4 Agregar middleware para uso de req.body
app.use(express.json());
// 5 Levantar el servidor
app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow);
});

// app.get('/', function (req, res) {
//     res.send('hello world')
// })

// 6 Agregar el route a la app
routerApi(app);

// localhost:3000