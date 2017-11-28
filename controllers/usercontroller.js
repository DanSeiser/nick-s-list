const db = require("../models");
// Defining methods for the task controller
module.exports = {
  findById: function(req, res) {
    db.Tasks
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
