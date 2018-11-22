var express = require('express');
var router = express.Router();
const rep_controller=require('../controllers/repController')

router.get('/', rep_controller.index);
router.post('/insertOneRep',rep_controller.insertOne)
router.put('/alterOneRep', rep_controller.alterOneUser)
module.exports = router;