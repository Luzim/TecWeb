var express = require('express');
var router = express.Router();
const rep_controller=require('../controllers/repController')
var jwt = require('jsonwebtoken');
router.get('/', verificaToken,rep_controller.index);
router.post('/insertOneRep',verificaToken,rep_controller.insertOne)
router.put('/alterOneRep', verificaToken,rep_controller.alterOneRep)
router.delete('/deleteOneRep/name',verificaToken,rep_controller.deleteOneRep)
router.post('/insertContasMes', verificaToken,rep_controller.insertContasMes)



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