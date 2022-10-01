
/**
 * Capa route, utilizada para el mapeo de los path
 */
 const express = require('express');
 const shoesRouter = express.Router();
 
 const {
     get,
     getById,
     create,
     edit,
     editComplete,
     delet
 } = require('../../controllers/shoes/');
 
shoesRouter.get('/', get); // localhost:3000/shoes/

shoesRouter.get('/:id', getById); // localhost:3000/shoes/4

shoesRouter.post('/', create); // localhost:3000/shoes/

shoesRouter.patch('/:id', edit); // localhost:3000/shoes/4

shoesRouter.put('/:id', editComplete); // localhost:3000/shoes/4

shoesRouter.delete('/:id', delet); // localhost:3000/shoes/4

module.exports = shoesRouter;