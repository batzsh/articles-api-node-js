import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
	response.json({
		message: 'Articles API',
		author: '@henbalmant',
	});
});

app.listen(3333, () => {
	console.log('🚀  Server started on port 3333');
});
