const mongoose = require('mongoose');

const actionSchema = mongoose.Schema({
    type: {type: Boolean, required: true},
    status: {type: Boolean, required: true},
    date: {type: Date, required: true},
    reminderTime: {type: TimeRanges},
    subject: {type: String},
    text: {type: Text},
    mediaId: {type: String},
    userId: {type: String, required: true},
    contactId: {type: String, required: true},
    parentActionId: {type: String}
});

module.exports = mongoose.model('Action', actionSchema);