const Users = require('../models/users_model')
var jwt = require('jsonwebtoken');
exports.login =  function(req, res){
    var user = req.body
    Users.findOne({email: user.email}, function(err,U){
        if (err) return res.status(500).send()

        if(U.tipo=='admin'){
            
            if(err) return res.status(500).send()
            if(U.password == user.password){

                var token = jwt.sign({id: U._id}, 'supersecret', {
                    expiresIn: 86400
                })
                res.status(200)
                res.send({ token: token, tipo: 'admin'})
            } else{

                return res.status(401).send({token: null, tipo: null})
            }
        }
        else {
            if (U.password ==  user.password){

                var token = jwt.sign({id: U._id}, 'supersecret', {
                    expiresIn: 86400
                })
                res.status(200)
                res.send({token:token, tipo: 'normal'})
            } else{

                return res.status(401).send({token: null, tipo: null})
            }
        }
    })
}