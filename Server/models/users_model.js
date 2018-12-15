const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    nickname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, default: '123'},
    tipo: {type: String, required: true, default:'normal'},
    token: {type: String,required: true}
});

module.exports = mongoose.model('User', UserSchema);