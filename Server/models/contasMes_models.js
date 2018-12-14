const mongoose = require('mongoose');
const Contas = require('../models/contas_model')
const Schema = mongoose.Schema;

let ContasMSchema = new Schema({
    contas: [],
    data: {type: String, required: true},
});

module.exports = mongoose.model('ContasMes', ContasMSchema);