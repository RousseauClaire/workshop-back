const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {type: String, required: true},
    tel: {type: String},
    email: {type: String},
    fax: {type: String},
    address: {type: String},
    status: {type: String, required: true},
    contactType: {type: Boolean, required: true},
    comment: {type: Text},
});

module.exports = mongoose.model('Contact', contactSchema);
