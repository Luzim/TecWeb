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

exports.alterOneRep = function (req,res,next){
  body = req.body
  alterRep = new Rep({
    name: body.name,
    contas: body.contas
  })
  Rep.findOne({name: alterUser.name},function(err,result){
    if (err) return console.log(err);
    result.name = alterRep.name;
    result.contas= alterRep.contas
    console.log('Show')
    result.save();
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.send('República alterada com sucesso')
  }
  );
  
};

exports.deleteOneRep = function(req,res,next){
  name =  req.eq;  
  Rep.deleteOne(name, function(err,result){
    if (err) return console.log(err);
    res.setHeader('Content-Type','application/json');
    res.status(200);
  })
}