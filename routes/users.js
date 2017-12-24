const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/', function(req,res){

	User.getUsers( function(err,users){
	if (err) {
		throw err;
	}else{
		res.json(users);
	}
	});

});

router.get(`/:_id`, function(req,res){
	User.getUserById(req.params._id, function(err, user){
	if (err) {
		throw err;
	}else{
		res.json(user);
	}
	});
});

router.post('/add', function(req,res){
	let newUser = new User({
		name:req.body.name
	});

	User.addUser(newUser, function(err, newUser){
		if (err) {
			res.json({success:false, msg: 'Failed to register user'});
		}else{
			res.json({success:true, msg: 'Registered!'});
		}
	});

});

router.put(`/update/:_id`, function(req,res){
	let id = req.params._id;
	let body = req.body.name;

	User.updateUser(id,body,{},function(err, update){
		if (err) {
			throw err;
		}else {
			res.json({success:true, msg: 'Updated!'});
		}
	});

});

router.delete(`/delete/:_id`, function(req,res){
	let id = req.params._id;

	User.deleteUser(id,function(err,deleted){
		if (err) {
			throw err;
		}else {
			res.json({deleted:true, success:'deleted'});
		}
	});
});

module.exports = router;