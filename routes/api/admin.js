const router = require('express').Router();
const {body, validationResult, checkSchema } = require('express-validator');
const { nuevoUsuario, checkError } = require('../../helpers/validators');

const { getAll, getById, create, deleteById, update }  = require('../../models/admin.model');

//mostrar todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await getAll();
        res.json(usuarios);
    }catch{
        res.json({fatal: error.message});
    }
    
});


//mostrar usuario por ID
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    const usuario = await getById(userId);
    if(usuario){
        res.json(usuario)
    }else{
        res.json({error: 'No existe el usuario con ese ID'});
    }
});

//creo un nuevo usuario
router.post('/', 
    checkSchema(nuevoUsuario),
    checkError,

    async (req, res) => {
        const result = await create(req.body);
        const usuario = await getById(result.insertId);
        res.json(usuario)
    }
);

//Elimino un usuario
router.delete('/:userId', async (req, res) => {
    const {userId} = req.params;
    const result = await deleteById(userId);
    res.json(result);
});

//Actualizar Usuario
router.put('/:userId', async (req, res) => {
    const {userId} = req.params;
    const result = await update(userId, req.body);

    res.json(result);
});


module.exports = router;