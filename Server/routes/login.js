var express = require('express');
var router = express.Router();
const loginController=require('../controllers/loginController')
router.post('/login',loginController.login)
router.post('/insertOneusuario', loginController.insertOne)
router.get('/get',loginController.get)
module.exports = router;