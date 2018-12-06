var express = require('express');
var router = express.Router();
const user_controller=require('../controllers/userController')
/* GET home page. */
router.get('/', user_controller.index);
router.post('/insertOne',user_controller.insertOne)
router.put('/alterOneUser', user_controller.alterOneUser)
router.delete('/deleteOneUser/nickname', user_controller.deleteOneUser)
module.exports = router;