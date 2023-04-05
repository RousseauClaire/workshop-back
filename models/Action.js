const mongoose = require('mongoose');

const actionSchema = mongoose.Schema({
    type: {type: String, enum: ["envoyée", "reçue"]},
    status: {type: String, required: true, enum: ["non commencée", "terminée"]},
    date: {type: Date, required: true},
    // reminderTime: {type: TimeRanges},
    subject: {type: String},
    text: {type: String},
    mediaId: {type: String},
    userId: {type: String, required: true},
    contactId: {type: String, required: true},
    parentActionId: {type: String}
});

module.exports = mongoose.model('Action', actionSchema);