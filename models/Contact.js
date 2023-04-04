const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {type: String, required: true},
    tel: {type: String},
    email: {type: String},
    fax: {type: String},
    address: {type: String},
    status: {type: String, required: true, enum: ["lead", "lead mort", "prospect", "prospect mort", "client"]},
    contactType: {type: String, required: true, enum: ["B2B", "B2C"]},
    comment: {type: String},
});

module.exports = mongoose.model('Contact', contactSchema);
