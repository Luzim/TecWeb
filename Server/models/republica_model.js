const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let RepSchema = new Schema({
    name: {type: String, required: true, max: 100},
    contas: [{type: String, required: false}],
});

module.exports = mongoose.model('Rep', RepSchema);