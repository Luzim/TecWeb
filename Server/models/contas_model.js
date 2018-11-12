const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContasSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    data: {type: Date, required: true},
});

module.exports = mongoose.model('Contas', ContasSchema);