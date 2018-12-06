var express = require('express');
var router = express.Router();
const rep_controller=require('../controllers/repController')

router.get('/', rep_controller.index);
router.post('/insertOneRep',rep_controller.insertOne)
router.put('/alterOneRep', rep_controller.alterOneRep)
router.delete('/deleteOneRep/name',rep_controller.deleteOneRep)
module.exports = router;