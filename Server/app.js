const express = require('express');
const mongoose = require('mongoose')
const body_parser = require('body-parser');
// initialize our express app
const app = express();
//Definindo rotas
const index = require('./routes/index');
const rep = require('./routes/republicas');
const cont = require('./routes/contas');
const cors = require('cors');
//Conectando com o banco de dados
var mongoDB = 'mongodb://127.0.0.1/TpWeb';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

//Definindo alguns atributos de resposta
app.use(body_parser.urlencoded({
    extended: true
}));

app.use(body_parser.json());

app.use(cors());
//Definindo as rotas de cada Schema
app.use('/users',index) //ROUTES
app.use('/reps', rep)
app.use('/contas', cont)
//app.use('/login', login)
let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
