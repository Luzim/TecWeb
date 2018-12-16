const Users = require('../models/users_model')
var jwt = require('jsonwebtoken');

exports.insertOne = function(req, res, next){
    body = req.body;
    console.log('aqui')
    var newUser = new Users({
      name: body.name,
      nickname: body.nickname,
      email: body.email,
      password: body.password
    });
    
    newUser.save(function(err){
      if (err) return console.log(err);
      res.setHeader('Content-Type','application/json');
      res.status(200);
      res.send('Usuário inserido com sucesso')
    })
  };
  exports.get = function(req, res, next) {

    Users.find( function(err,result){
        console.log('result')
      res.setHeader('Content-Type','application/json');
      res.status(200);
      res.send(JSON.stringify(result))
    });
  };

exports.login =  function(req, res){
    var user = req.body
    Users.findOne({email: user.email}, function(err,U){
        if (err) return res.status(500).send()
        console.log('tem algo de errado')
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