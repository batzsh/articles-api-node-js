import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

class ArticlesController {
	// Show article
	async show(request, response) {
		const { id } = request.params;

		const article = await prisma.article.findUnique({
			where: {
				id: parseInt(id),
			},
		});

		if (!article) {
			return response.status(404).json({ message: 'Article not found.' });
		}

    return response.json({
      ...article
    })
	}

	// Create article
	async create(request, response) {
		const { title, published, author } = request.body;

		const data = {
			title,
			published,
			author,
		};

		const article = await prisma.article.create({
			data,
		});

		return response.json({
			...article,
		});
	}
}

export default ArticlesController;
