const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	created_at:{
		type:Date,
		default: Date.now
	}
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function(callback){
	User.find(callback);
}

module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}

module.exports.addUser = function(newUser, callback){
	User.create(newUser,callback);
}

module.exports.updateUser = function(id, body, options, callback){
	//queries
	let query = {_id:id};
	let update = {name: body};

	User.findOneAndUpdate(query,update,options,callback);
}

module.exports.deleteUser = function(id, callback){
	//queries
	let query = {_id:id};
	User.remove(query,callback);
}

