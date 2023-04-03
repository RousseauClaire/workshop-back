const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    job: {type: String},
    isAdmin: {type: Boolean, required: true}
});

module.exports = mongoose.model('User', userSchema);