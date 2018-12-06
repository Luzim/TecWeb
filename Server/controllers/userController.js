const Users = require('../models/users_model')

exports.index = function(req, res, next) {

    Users.find( function(err,result){
      res.setHeader('Content-Type','application/json');
      res.status(200);
      res.send(JSON.stringify(result))
    });
  };

exports.insertOne = function(req, res, next){
  body = req.body;
  var newUser = new Users({
    name: body.name,
    nickname: body.nickname,
    email: body.email,
  });
  console.log(newUser)
  newUser.save(function(err){
    if (err) return console.log(err);
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.send('Usuário inserido com sucesso')
  })
};

exports.alterOneUser = function (req,res,next){
  body = req.body
  alterUser = new Users({
    name: body.name,
    nickname: body.nickname,
    email: body.email
  });
  Users.findOne({email: alterUser.email},function(err,result){
    if (err) return console.log(err);
    result.name = alterUser.name;
    result.nickname = alterUser.nickname;
    result.save();
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.send('Usuário alterado com sucesso')
  });
}
exports.deleteOneUser =  function (req,res,nex){
    nickname =  req.eq;
    Users.deleteOne(nickname, function(err,result){
      if (err) return console.log(err);
      res.setHeader('Content-Type','application/json');
      res.status(200);
    })
}