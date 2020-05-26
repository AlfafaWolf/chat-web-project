const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    content: { 
        type: String, 
        required: true 
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Message', MessageSchema);
