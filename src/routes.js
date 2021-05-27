import express from 'express';

const routes = express.Router();

routes.get('/articles', (request, response) => {
	return response.json({
		message: 'Articles route',
	});
});
