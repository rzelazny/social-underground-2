const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Creating our model of the gaming/socializing tables
    const Table = new Schema({
    
    game: {
        type: String,
        allowNull: false,
        default: "Just Chatting"
    },
    game_ended: {
        type: Boolean,
        default: false
    },
    // There must be at least one player at a table
    user1: {
        type: String,
        allowNull: false
    },
    user2: {
        type: String,
        default: "Open Seat"
    },
    user3: {
        type: String,
        default: "Open Seat"
    },
    user4: {
        type: String,
        default: "Open Seat"
    },
    user5: {
        type: String,
        default: "Open Seat"
    },
    roomNumber: {
        type: Number,
        default: function(){
            return Math.floor(Math.random()*10000);
        }
    }
    });

module.exports = mongoose.model('Table', Table);