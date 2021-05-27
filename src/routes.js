import express from 'express';

import ArticlesController from './controllers/ArticlesController.js';

const routes = express.Router();

const articlesController = new ArticlesController();

// Article Routes
// Create article
routes.post('/articles', articlesController.create);

export default routes;
