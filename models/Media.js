const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    label: {type: String, required: true},
});

module.exports = mongoose.model('Media', mediaSchema);