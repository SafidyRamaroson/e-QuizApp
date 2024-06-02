import { CategoryQuizz } from "@prisma/client"
import getInstancePrisma from "../../utils/prisma/getInstancePrisma"

const createCategory = async(categoryName:string,authorId:number) => {
    const prisma  =  getInstancePrisma()
    
    const newCategory:CategoryQuizz = await prisma.categoryQuizz.create({
        data:{
            name:categoryName,
            userId:authorId
        }
    })
    
    return newCategory
}

const getCategoryQuizzList = async():Promise<CategoryQuizz[] | []>  => {
    const prisma = getInstancePrisma()
    const categoryList:CategoryQuizz[] | [] = await prisma.categoryQuizz.findMany()
    return categoryList
}


export default {
    createCategory,
    getCategoryQuizzList
}