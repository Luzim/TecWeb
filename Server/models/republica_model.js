const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let RepSchema = new Schema({
    name: {type: String, required: true, max: 100},
    contas: [],
});

module.exports = mongoose.model('Rep', RepSchema);