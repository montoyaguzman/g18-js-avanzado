const express = require('express');

const shoesRouter = require('./shoes/index');
// const dummyRouter  = require('./dummyes/index');
// const customersRouter = require('./customers/index');

const routerApi = (app) => {
    // 6.1 Puntos de entrada de la API
    app.use('/shoes', shoesRouter);
    // router.use('/customers', customersRouter);
    // app.use('/dummy', dummyRouter);
};

module.exports = routerApi;

// localhost:3000/shoes