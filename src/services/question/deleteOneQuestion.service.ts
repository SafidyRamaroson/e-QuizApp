import getInstancePrisma from "../../utils/prisma/getInstancePrisma";

 const prisma = getInstancePrisma()
const deleteQuestionService = async(questionId:number):Promise<void> =>{

    const matchQuestion = await checkExistenceQuestion(questionId)

    if(!matchQuestion){
        throw new Error(`Question with id ${questionId} does not found`)
    }
    
    deleteChoicesofQuestion(questionId)

    await prisma.question.delete({
        where:{
            id:questionId
        }
    })

} 


const checkExistenceQuestion = async(questionId:number):Promise<boolean> => {
    const question = await  prisma.question.findUnique({
        where:{
            id:questionId
        }
    })
    return question? true:false
}

const deleteChoicesofQuestion = async(questionId:number):Promise <void> => {
    await prisma.choice.deleteMany({
        where:{
            questionId
        }
    })
}


export default deleteQuestionService