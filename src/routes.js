import express from 'express';

import ArticlesController from './controllers/ArticlesController.js';
import LikesController from './controllers/LikesController.js';

const routes = express.Router();

const articlesController = new ArticlesController();
const likesController = new LikesController();

// Article Routes
// Create article
routes.post('/articles', articlesController.create);
// Show article
routes.get('/articles/:id', articlesController.show);
// List articles
routes.get('/articles', articlesController.index);

// Like Routes
// Create like
routes.post('/articles/:id/like', likesController.create);
// List likes
routes.get('/likes', likesController.index);

export default routes;
