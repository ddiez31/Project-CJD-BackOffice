const Region = require('../models').Region;

module.exports = {
  list(req, res) {
    return Region
      .findAll({})
      .then((regions) => res.status(200).send(regions))
      .catch((error) => res.status(400).send(error));
  }
};