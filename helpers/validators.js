const { validationResult } = require("express-validator")

const nuevoUsuario = {
    cedula:{
        exists: {
            errorMessage: 'El campo es requerido'
        },
        isLength: {
            options: {min: 10, max:10},
            errorMessage: 'La cedula debe tener 10 caracteres'
        }        
    },

    nombres:{
        exists: {
            errorMessage: 'El campo es requerido'
        },
        matches: {
            options: [/^[A-Za-z0-9 .,'!&]+$/],
            errorMessage: 'Caracteres no validos'
        }
    },

    apellidos:{
        exists: {
            errorMessage: 'El campo es requerido'
        },
        matches: {
            options: [/^[A-Za-z0-9 .,'!&]+$/],
            errorMessage: 'Caracteres no validos'
        }
    },

    email: {
        exists: {
            errorMessage: 'El mail es obligatorio'
        },
        isEmail: {
            errorMessage: 'El campo mail debe ser valido'
        }
    }
}

const checkError = (req, res, next) => {
    //comprobamos los errores de validacion
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        //si elemento error no esta vacio significa que hay errores
        return res.status(400).json(errors.mapped()); //mapped porque me devuelve un objeto json calve, valor
    }

    next();
}

module.exports = {nuevoUsuario, checkError}