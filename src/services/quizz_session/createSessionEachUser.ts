import { QuizzSession } from "@prisma/client";
import { IQuizzSession } from "../../interfaces";
import getInstancePrisma from "../../utils/prisma/getInstancePrisma";
import checkUserExistence from "../../utils/checkUserExistence";

const prisma = getInstancePrisma()
const createQuizzSessionService = async(quizzSessionData:IQuizzSession):Promise<QuizzSession> => {
    
    const { userId } = quizzSessionData

    if(! await checkUserExistence("",Number(userId))){
        throw new Error("User not found")
    }

    const quizzSession = prisma.quizzSession.create({
        data:{
            ...quizzSessionData
        }
    })
    return quizzSession
}

export default createQuizzSessionService