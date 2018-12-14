var express = require('express');
var router = express.Router();
const contas_controller=require('../controllers/contaController')
/* GET home page. */
router.get('/', contas_controller.getAllcontas);
router.post('/insereConta', contas_controller.insereConta);
router.post('/Mes',contas_controller.createMes)
//router.put('/alterOneUser', user_controller.alterOneUser)
//router.delete('/deleteOneUser/nickname', user_controller.deleteOneUser)
module.exports = router;