const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContasSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: String, required: true},
    data: {type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('Contas', ContasSchema);