import { Request , Response } from "express";
import createQuestionService from "../services/question/createQuestion..service";
import insertChoisesOfOneQuestionService from "../services/choice/insertChoisesQuestion";
import handleError from "../utils/handleError";
import { Choice, Question } from "@prisma/client";
import { IChoice,IInputChoice } from "../interfaces";


const createQuestionAndChoises = async(req:Request,res:Response) =>{

    const { question,category,choises }  = req.body
    const { id:categoryId } = await category

    try {
        const newQuestion:Question = await createQuestionService(question,Number(categoryId))

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

export default {createQuestionAndChoises}