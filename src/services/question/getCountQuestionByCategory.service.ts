import categoryQuestion from "../../constants/category"
import getInstancePrisma from "../../utils/prisma/getInstancePrisma"

const prisma = getInstancePrisma()

const getCountQuestionByCategory = async(categoryId:number) => {
    const questionsList = await prisma.question.count({
        where:{
            categoryId
        }
    })

    return questionsList
}

export default getCountQuestionByCategory


