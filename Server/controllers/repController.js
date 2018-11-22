const Rep = require('../models/republica_model');

exports.index = function(req, res, next) {

    Rep.find( function(err,result){
      res.setHeader('Content-Type','application/json');
      res.status(200);
      res.send(JSON.stringify(result))
    });
  };

exports.insertOne = function(req, res, next){
  body = req.body;
  var newRep = new Rep({
    name: body.name,
  });
  newRep.save(function(err){
    if (err) return console.log(err);
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.send('República inserida com sucesso')
  })
};

exports.alterOneUser = function (req,res,next){
  body = req.body
  alterUser = new Users({
    name: body.name,
    nickname: body.nickname,
    email: body.email
  })
  Users.findOne({name: alterUser.name},function(err,result){
    if (err) return console.log(err);
    result.email = alterUser.email;
    result.save();
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.send('Usuário alterado com sucesso')
  }
  );
  
};