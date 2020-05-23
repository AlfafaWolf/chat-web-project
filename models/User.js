const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    fistName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', UserSchema);