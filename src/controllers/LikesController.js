import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

class LikesController {
	// Create like
	async create(request, response) {
		const { id } = request.params;

		const article = await prisma.article.findUnique({
			where: {
				id: parseInt(id),
			},
		});

		if (!article) {
			return response.status(404).json({ message: 'Article not found.' });
		}

		const data = {
			article_id: article.id,
		};

		const like = await prisma.like.create({
			data,
		});

		return response.json({
			...like,
		});
	}
}

export default LikesController;
