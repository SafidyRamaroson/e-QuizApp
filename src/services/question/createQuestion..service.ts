import getInstancePrisma from "../../utils/prisma/getInstancePrisma";

const createQuestion = async(theQuestion:string,categoryId:number) => {
    const prisma = getInstancePrisma()
    try {
        const matchCategory = await prisma.categoryQuizz.findUnique({
            where:{
                id:Number(categoryId)
            }
        })

        if(!matchCategory){
            throw new Error("Category Quizz not found")
        }
        
        const newQuestion = await prisma.question.create({
            data:{
                content:theQuestion,
                categoryId:categoryId,
                createdAt:new Date(),
                updatedAt:new Date()
            }
        })
        
        return newQuestion
    } catch (error) {
        throw new Error((error as Error)?.message)
    }

    
}

export default createQuestion