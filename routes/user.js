const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get list from db
router.get('/user', function(req, res, next){
	res.send({type: 'GET'});
});

//add new data to the db
router.post('/user', function(req, res, next){
	var user = new User(req.body),
	user.save();
	res.send({
		type: 'POST',
		id: req.body.id,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	}).catch(next);
});

//update data
router.put('/user/:id', function(req, res, next){
	user.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
	user.findOne({_id: req.params.id}).then(function(user){
		res.send(user);
	});
	});
});

//delete data
router.delete('/user/:id', function(req, res, next){
	req.params.id;
	res.send({type: 'DELETE'});
});

module.exports = router;