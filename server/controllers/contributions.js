const Contribution = require('../models').Contribution;

module.exports = {
  list(req, res) {
    return Contribution
      .findAll({})
      .then((contributions) => res.status(200).send(contributions))
      .catch((error) => res.status(400).send(error));
  }
};