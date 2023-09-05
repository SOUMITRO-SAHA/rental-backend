const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	try {
		const users = await prisma.user.findMany();
		console.log("Database connection successful");
		console.log("Users:", users);
	} catch (error) {
		console.error("Database connection error:", error);
	} finally {
		await prisma.$disconnect();
	}
}

main().catch((error) => {
	console.error("Error:", error);
});
