var express = require('express');
var router = express.Router();
const user_controller=require('../controllers/userController')
/* GET home page. */
router.get('/', verificaToken,user_controller.index);
router.post('/insertOne',verificaToken,user_controller.insertOne)
router.put('/alterOneUser',verificaToken, user_controller.alterOneUser)
router.delete('/deleteOneUser/nickname', verificaToken,user_controller.deleteOneUser)

function verificaToken(req, res, next) {

    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(403).send({ auth: false, message: 'Nenhum token disponvível.' });

    jwt.verify(token, 'supersecret', function(err, decoded) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Erro de autenticação.' });

        req.userId = decoded.id;
        next();
    });
}
module.exports = router;