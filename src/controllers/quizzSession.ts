import { QuizzSession } from "@prisma/client";
import createQuizzSessionService from "../services/quizz_session/createSessionEachUser";
import handleError from "../utils/handleError";
import { Request, Response } from "express";
import handleUserAnswerService from "../services/userAnswer/handleUserAnswer.service";
import { IQuizzSession } from "../interfaces";


const createQuizzSession = async(req:Request,res:Response):Promise<void> => {
    const { userId } = req.params
    const { quizz_sessionData , userAnswerData } = req.body

    try {
        const sessionData: IQuizzSession = {
            ...quizz_sessionData,
            userId: Number(userId)
        };
        const quizzSession:QuizzSession = await createQuizzSessionService(sessionData)
        await handleUserAnswerService(userAnswerData,quizzSession.id)
        res
        .status(201)
        .json({
            success:true,
            message:`Quizz Session of the user with Id: ${userId} created`,
            data:quizzSession
        })
    } catch (error) {
        handleError(res,error)
    }
}


export default{ createQuizzSession }