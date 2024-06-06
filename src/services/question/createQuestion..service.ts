import { Difficulty } from "@prisma/client";
import getInstancePrisma from "../../utils/prisma/getInstancePrisma";

const createQuestion = async (theQuestion: string, categoryId: number,difficulty:Difficulty) => {
    const prisma = getInstancePrisma();

    try {
        const matchCategory = await prisma.categoryQuizz.findUnique({
            where: {
                id: Number(categoryId)
            }
        });

        if (!matchCategory) {
            throw new Error("Category Quizz not found");
        }

        const newQuestion = await prisma.question.create({
            data: {
                content: theQuestion,
                categoryId: categoryId,
                difficulty,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

        return newQuestion;
    } catch (error) {
        throw new Error((error as Error)?.message);
    } finally {
        await prisma.$disconnect();
    }
};

export default createQuestion;
