const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserStats = new Schema({
    // email: {
	// 	type: String,
	// 	allowNull: false,
	// 	// unique: true,
	// 	match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	// },
    blackjack_win: {
        type: Number,
        default: 0
    },
    // user_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
    });

    module.exports = mongoose.model('UserStats', UserStats);