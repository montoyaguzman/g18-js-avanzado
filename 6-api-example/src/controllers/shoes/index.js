const ShoesServices = require('../../services/shoes/');
const shoeService = new ShoesServices();

const get = async (req, res) => {
    // 6.1.1: Leer la request
    const { price, size } = req.query;
    try {
        // 6.1.2: Acceder a la capa service para tener una respuesta
        const shoes = await shoeService.findAll(price, size);
        res.status(200).json(shoes);
    } catch(error) {
        // 6.1.3: Si hay un error al acceder al services respondemos un error generico
        res.status(404).json( { message: 'no hay datos'} );
    }
    
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const foundedShoe = await shoeService.findOne(id);
        res.status(200).send( { message: 'encontrado!', foundedShoe } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
};

const create = async (req, res) => {
    // 6.1.1: Leer la request
    const newShoe = req.body;
    try {
        // 6.1.2: Acceder a la capa service para tener una respuesta
        await shoeService.create(newShoe);
        res.status(201).send();
    } catch(error) {
        // 6.1.3: Si hay un error al acceder al services respondemos un error generico
        res.status(500).send( { message: 'intenten más tarde' } );
    }
};

const edit = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        await shoeService.editPartial(id, body);
        res.status(200).send( { message: 'modificacion patch exitosa!', id } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
};

const editComplete = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        await shoeService.editComplete(id, body);
        res.status(200).send( { message: 'modificacion put exitosa!', id } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
};

const delet = async (req, res) => {
    const { id } = req.params;
    try {
        await shoeService.delete(id);
        res.status(200).send( { message: 'eliminacion exitosa!' } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
};

module.exports = {
    get,
    getById,
    create,
    edit,
    editComplete,
    delet
};