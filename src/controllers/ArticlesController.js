import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

class ArticlesController {
	async create(request, response) {
		const { title, published, author } = request.body;

		const data = {
			title,
			published,
			author,
		};

		const prisma = new PrismaClient();

		const article = await prisma.article.create({
			data,
		});

		return response.json({
			...article,
		});
	}
}

export default ArticlesController;
