const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get list from db
router.get('/mastertask', function(req, res, next){
  res.send({type: 'GET'});
});

//add new data to the db
router.post('/mastertask', function(req, res, next){
  var mastertask = new MasterTask(req.body),
  mastertask.save();
  res.send({
    type: 'POST',
    userID: req.body.userID,
    taskID: req.body.taskID,
  }).catch(next);
});

//update data
router.put('/mastertask/:id', function(req, res, next){
  mastertask.findByIdAndUpdate({id: req.params.id}, req.body).then(function(){
  mastertask.findOne({id: req.params.id}).then(function(mastertask){
    res.send(mastertask);
  });
  });
});

//delete data
router.delete('/mastertask/:id', function(req, res, next){
  req.params.id;
  res.send({type: 'DELETE'});
});

module.exports = router;
