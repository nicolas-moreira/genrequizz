const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nameSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    }
});

var Name = mongoose.model('Name', nameSchema);

module.exports = Name;