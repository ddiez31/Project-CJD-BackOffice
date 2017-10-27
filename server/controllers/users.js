const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models').User;
const Type_user = require('../models').Type_user;
const Contribution = require('../models').Contribution;
SECRET_TOKEN = 'cjd-backoffice-app';
const multer = require('multer');
const DIR = './public/uploads/';
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, DIR)
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

module.exports = {
  create(req, res) {
    return User
      .create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      avatar: req.body.avatar,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      company_name: req.body.company_name,
      company_job: req.body.company_job,
      company_address: req.body.company_address,
      company_business_revenue: req.body.company_business_revenue,
      num_employee: req.body.num_employee,
      other_function: req.body.other_function,
      points: req.body.points,
      hobby: req.body.hobby,
      description: req.body.description,
      type_user_id: req.body.type_user_id,
      contribution_id: req.body.contribution_id
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return User.findAll({
      include: [
        {
          model: Type_user
        }, {
          model: Contribution
        }
      ]
    }).then((users) => res.status(200).send(users)).catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return User
      .findById(req.params.userId, {
		    include: [
        {
          model: Type_user
        }, {
          model: Contribution
        }
      ]
	  })
      .then((user) => {
        if (!user) {
          return res
            .status(404)
            .send({message: 'User Not Found'});
        }
        return res
          .status(200)
          .send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findById(req.params.userId, {})
      .then(user => {
        if (!user) {
          return res
            .status(404)
            .send({message: 'User Not Found'});
        }
        return user
          .update({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          avatar: req.body.avatar,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          company_name: req.body.company_name,
          company_job: req.body.company_job,
          company_address: req.body.company_address,
          company_business_revenue: req.body.company_business_revenue,
          num_employee: req.body.num_employee,
          other_function: req.body.other_function,
          points: req.body.points,
          hobby: req.body.hobby,
          description: req.body.description,
          type_user_id: req.body.type_user_id,
          contribution_id: req.body.contribution_id
        })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res
            .status(400)
            .send({message: 'User Not Found'});
        }
        return user
          .destroy()
          .then(() => res.status(204).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  login(req, res) {
    return User
      .findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        if (!user) {
          return res
            .status(403)
            .send({message: 'User Not Found'});
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({
            user: user
          }, SECRET_TOKEN, {expiresIn: '8h'});
          return res
            .status(200)
            .json({token: token});
        };
        return res
          .status(403)
          .send({message: 'User Not Found'});
      })
      .catch((error) => res.status(400).send(error));
  },

  upload(req, res) {
    const upload = multer({
      storage: storage,
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return callback(new Error('Only image files are allowed!'));
        }
        callback(null, true);
      }
    }).single('avatar');
    let link = '';
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
        return res
          .status(422)
          .send("an Error occured")
      }
      link = req.file.path;
      return res.send("Upload Completed for " + link);
    });
  }
};
