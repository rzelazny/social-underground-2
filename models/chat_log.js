const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating our model of chat log
    const ChatLog = new Schema({
    
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // chat logs are per gaming table
    table_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    });

    module.exports = mongoose.model('ChatLog', ChatLog);