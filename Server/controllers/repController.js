const Rep = require('../models/republica_model');
const ContasMes = require('../models/contasMes_models')
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

exports.insertContasMes = function(req,res,next){
  body = req.body
  name = {name: body.name}
  mes = {data: body.data}

  Rep.findOne(name, function(err, rep){
    if(err) return console.log(err)
    ContasMes.findOne(mes,function(erro,contM){
      if(erro) return console.log(erro)
      rep.contas.push(contM)
      rep.save(function(err){
        res.setHeader('Content-Type','application/json');
        res.status(200);
        res.send('Conta inserida na república com sucesso')
      });
    })
  })
}