const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    label: {type: String, required: true, unique:true},
});

mediaSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Media', mediaSchema);