const mongoose = require('mongoose');

const relationSchema = mongoose.Schema({
    compagnyContactId: {type: String, required: true},
    personContactId: {type: String, required: true}
});

module.exports = mongoose.model('Relation', relationSchema);