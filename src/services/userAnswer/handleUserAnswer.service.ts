import getInstancePrisma from "../../utils/prisma/getInstancePrisma";
import { IInputUserAnswerData } from "../../interfaces";

const prisma = getInstancePrisma()
const handleUserAnswerService  = async(userAnswerData:IInputUserAnswerData[],quizz_session_id:number):Promise <void> => {
    
    const userAnswerDataWithQuizzSessionId = userAnswerData.map((data)=>({
        ...data,
        quizzSessionId:quizz_session_id
    }))

    await prisma.userAnswer.createMany({
        data:userAnswerDataWithQuizzSessionId,
    })
}

export default handleUserAnswerService