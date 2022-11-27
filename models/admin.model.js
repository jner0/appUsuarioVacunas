const { executeQuery, executeQueryOne } = require('../helpers/utils');

//recuperar todos los usuarios

const getAll = () => {
    return executeQuery('select * from usuario');
}

//recupera Usuario por ID
const getById = (userId) => {
    return executeQueryOne('select * from usuario where id = ?', [userId]);
}

//PARA LA CREACION DE CLIENTES
const create = ({cedula, nombres, apellidos, email, fecha_nacimiento, direccion, telefono_movil, fk_rol}) => {
    return executeQuery('insert into usuario (cedula, nombres, apellidos, email, fecha_nacimiento, direccion, telefono_movil, fk_rol) values (?,?,?,?,?,?,?,?)', [cedula, nombres, apellidos, email, fecha_nacimiento, direccion, telefono_movil, fk_rol]);
}

//Eliminar
const deleteById = (userId) => {
    return executeQuery('delete from usuario where id = ?', [userId]);
}

//Actualizar
const update = (userId, {cedula, nombres, apellidos, email, fecha_nacimiento, direccion, telefono_movil, fk_rol}) => {
    return executeQuery('update usuario set cedula = ?, nombres = ?, apellidos = ?, email = ?, fecha_nacimiento = ?, direccion = ?, telefono_movil = ?, fk_rol = ? where id = ?', [cedula, nombres, apellidos, email, fecha_nacimiento, direccion, telefono_movil, fk_rol, userId]);
}

module.exports = {
    getAll, getById, create, deleteById, update
}