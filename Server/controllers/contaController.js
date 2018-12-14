const ContasMes = require('../models/contasMes_models');
const Contas = require('../models/contas_model');


exports.getAllcontas = function(req, res){

    ContasMes.find(function(err, result){
        if (err) return console.log(err)
        res.setHeader('Content-Type','application/json');
        res.status(200);
        res.send(JSON.stringify(result))
    })

}
exports.insereConta = function(req,res) {
    body = req.body
    data = {data: body.data}

    var newConta = new Contas({
        name: body.name,
        price: body.price,
    })

    console.log(newConta)
    newConta.save()
    ContasMes.findOne(data, function(err,result){
        if (err) return console.log(err);
        result.contas.push(newConta)
        result.save(function(err){
            res.setHeader('Content-Type','application/json');
            res.status(200);
            res.send('Gambiarra inserida com sucesso')
          });
        
             
    })
          
}
exports.createMes = function(req,res){
    body = req.body
    var mes = new ContasMes({
        data: body.data
    })
    mes.save(function(err){
        if (err) return console.log(err);
        res.setHeader('Content-Type','application/json');
        res.status(200);
        res.send('Gambiarra inserida com sucesso')
    })
}