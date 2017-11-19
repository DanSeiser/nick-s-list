const express = require('express');
const router = express.Router();
const Task = require('../models/task');

//get list from db
router.get('/task', function(req, res, next){
	res.send({type: 'GET'});
});

//add new data to the db
router.post('/task', function(req, res, next){
	var task = new Task(req.body),
	task.save();
	res.send({
		type: 'POST',
		title: req.body.title,
		description: req.body.description,
		completeBy: req.body.completeBy,
		isComplete: req.body.isComplete,
		isConfirmed: req.body.isConfirmed,
	}).catch(next);
});

//update data
router.put('/task/:id', function(req, res, next){
	task.findByIdAndUpdate({id: req.params.id}, req.body).then(function(){
	task.findOne({id: req.params.id}).then(function(task){
		res.send(task);
	});
	});
});

//delete data
router.delete('/task/:id', function(req, res, next){
	req.params.id;
	res.send({type: 'DELETE'});
});

module.exports = router;

 
