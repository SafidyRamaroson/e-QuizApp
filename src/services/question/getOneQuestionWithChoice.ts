import getInstancePrisma from "../../utils/prisma/getInstancePrisma";
import { IOuputQuestionWithChoices } from "../../interfaces";


const getOneQuestionWithChoices = async(questionId:number):Promise<IOuputQuestionWithChoices> => {
    
    const prisma = getInstancePrisma()
    const question:{
        content:string
        } | null = await prisma.question.findUnique({
        where:{
            id:questionId
        },
        select:{
            content:true
        }
    })

    if(!question){
        throw new Error(`Question with ID:${questionId} not found`)
    }

    const choices = await prisma.choice.findMany({
        where:{
            questionId
        },
        select:{
            id:true,
            content:true,
            is_correct:true
        }
    }) 

    return {
        questionId,
        question:question.content,
        choices
    }
}


export default getOneQuestionWithChoices
