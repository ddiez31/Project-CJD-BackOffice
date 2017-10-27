const Section = require('../models').Section;
const Region = require('../models').Region;

module.exports = {
  list(req, res) {
    return Section
      .findAll({
        include: [
          { model: Region }
        ]
      })
      .then((sections) => res.status(200).send(sections))
      .catch((error) => res.status(400).send(error));
  },
   retrieve(req, res) {
    return Section
      .findAll({
        include: [
          { model: Region }
        ],
		where: {
			region_id : req.params.sectionId
		}
      })
	    .then((sections) => {
			if (!sections) {
				return res
				.status(404)
				.send({message: 'Sections Not Found'});
			}
        return res
          .status(200)
          .send(sections);
      })
      .catch((error) => res.status(400).send(error));
   }
};
