const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating our model of chat log
const ChatLog = new Schema({
    
    user: {
        type: String,
        allowNull: false,
    },
    message: {
        type: String,
        allowNull: false,
    },
    // chat logs are per gaming table
    room: {
        type: Number,
        allowNull: false,
    },
    });

    module.exports = mongoose.model('ChatLog', ChatLog);