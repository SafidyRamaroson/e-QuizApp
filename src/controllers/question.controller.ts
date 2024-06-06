import { Request , Response } from "express";
import createQuestionService from "../services/question/createQuestion..service";
import insertChoisesOfOneQuestionService from "../services/choice/insertChoisesQuestion";
import handleError from "../utils/handleError";
import { Difficulty, Question } from "@prisma/client";
import { IChoice,IInputChoice } from "../interfaces";
import getTenRandomQuestionsWithChoisesServices from "./../services/question/getTenRandomQuestion.service";



const createQuestionAndChoises = async(req:Request,res:Response) =>{

    const { question,category,choises,difficulty }  = req.body
    const { id:categoryId } = await category

    try {
        const newQuestion:Question = await createQuestionService(question,Number(categoryId),difficulty)

        const { id:questionId } = newQuestion


        const mergeEachChoiseWithTheNewQuestionId:IChoice[] = choises?.map((choice:IInputChoice)=> ({
            ...choice,
            questionId
        }))
            
        await insertChoisesOfOneQuestionService(mergeEachChoiseWithTheNewQuestionId)
        res
        .status(201)
        .json({
            success:true,
            message:"Multiple Choises Question created",
            data:null
        })
    } catch (error) {
        handleError(res,error)
    }
}


const getTenRandomQuestionsWithChoises = async(req:Request, res:Response) => {
    const { difficulty } = req.query

    try {
        const tenRandomQuestionsWithChoises = await getTenRandomQuestionsWithChoisesServices(difficulty as Difficulty)

        res
        .status(200)
        .json({
            success:true,
            data:tenRandomQuestionsWithChoises,
            error:null
        })

    } catch (error) {
        handleError(res,error)
    }
}
export default {
    createQuestionAndChoises,
    getTenRandomQuestionsWithChoises,
}