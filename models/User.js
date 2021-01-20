const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require("bcryptjs");

const User = new Schema({
	email: {
		type: String,
		allowNull: false,
		// unique: true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	password: {
		type: String,
		allowNull: false
	},
	// userstats: {
    //     type: Schema.Types.ObjectId,
    //     ref: "UserStats"
	// }
	blackjack_win: {
		type: Number,
		default: 0
	},
	blackjack_lose: {
		type: Number,
		default: 0
	}
});

//Validate hashed password
User.methods.comparePassword = function(plaintext) {
	console.log("checking password");
    return (bcrypt.compareSync(plaintext, this.password));
};

//Before a User is created, automatically hash their password
User.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);