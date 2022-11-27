const router = require('express').Router();
const { verifyToken, checkRole } = require('../helpers/middlewares');

router.use('/admin', verifyToken, checkRole(1), require('./api/admin'));
router.use('/users', require('./api/users'));

module.exports = router;