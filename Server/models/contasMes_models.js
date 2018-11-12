const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContasMSchema = new Schema({
    contas: [{type: String, required: true}],
    data: {type: Date, required: true},
});

module.exports = mongoose.model('ContasMes', ContasMSchema);