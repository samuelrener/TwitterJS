const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const BoxController = require('./controller/BoxController');
const FileController = require('./controller/FileController');
const UserController = require('./controller/UserController');
const PostController = require('./controller/PostController');

routes.post('/Box', BoxController.insert);
routes.post('/Box/:id/Files', multer(multerConfig).single('file'), FileController.Insert);

routes.get('/Box/:id', BoxController.showSingle);

routes.post('/User', UserController.Insert);
routes.post("/User/Login", UserController.Login);

routes.post("/Post/Insert", PostController.Insert);
routes.post("/Post/Login", PostController.Like);

routes.get('/User/:key', UserController.ConfirmSignIn);
module.exports = routes;