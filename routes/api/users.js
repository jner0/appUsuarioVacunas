const jwt = require('jsonwebtoken');
const { deleteById } = require('../../models/admin.model');

const router = require('express').Router();



router.post('/login', async (req, res) => {
    const { userName, pass } = req.body;
    db.query('select cedula,fk_rol from usuario where email = ? and cedula = ?', [userName, pass],
    (err,rows,fields) => {
        if(!err){
            if(rows.length > 0){
                let data = JSON.stringify(rows[0]);
                const token = jwt.sign(data, 'stil'); //este stil se recomienda que este en una variable de entorno
                res.json({token});
            }else{
                res.json('Usuario o clave incorrectos');
            }
        }else{
            console.log(err);
        }
    }
    )
});

/*
//middleware para checkear token
function verifyToken(req,res,next){
    if(!req.headers.authorization) return res.status(401).json('No Autorizado');

    const token = req.header.authorization.substr(7);
    console.log(token);
}
*/

module.exports = router;