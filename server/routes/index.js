const usersController = require('../controllers').users;
const regionsController = require('../controllers').regions;
const sectionsController = require('../controllers').sections;
const type_usersController = require('../controllers').type_users;
const contributionsController = require('../controllers').contributions;

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/api', (req, res) => res.status(200).send({message: 'Welcome to the routes API!'}));

  app.post('/api/login', usersController.login);

  app.post('/api/upload', usersController.upload);

  app.post('/api/user', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);

  app.get('/api/regions', regionsController.list);
  app.get('/api/sections', sectionsController.list);
  app.get('/api/sections/:sectionId', sectionsController.retrieve);
  app.get('/api/type_users', type_usersController.list);
  app.get('/api/contributions', contributionsController.list);

};
