const jwt = require('jsonwebtoken');

//middleware para checkear token
function verifyToken(req,res,next){
    if(!req.headers.authorization) return res.status(401).json('No Autorizado');

    const token = req.headers.authorization.substr(7);
    if(token !== " "){
        const content = jwt.verify(token, 'stil'); //comparamos con la palabra, la cual se recomienda que este en una variable de entorno
        req.data = content;
        next();
    }else{
        res.status(401).json('Token vacio');
    }
}

const checkRole = (role) => {
    return (req, res, next) => {
        if(req.data.fk_rol !== role) {
            return res.status(401).json({ fatal: `Restringido el acceso. Solo usuarios con rol: ${role}`});
        }
        next();
    }
}

module.exports = {
    verifyToken, checkRole
}