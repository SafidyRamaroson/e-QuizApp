import { Request , Response } from "express";
import createQuestionService from "../services/question/createQuestion..service";
import insertChoisesOfOneQuestionService from "../services/choice/insertChoisesQuestion";
import handleError from "../utils/handleError";
import { Difficulty, Question } from "@prisma/client";
import { IChoice,IInputChoice } from "../interfaces";
import getTenRandomQuestionsWithChoisesServices from "./../services/question/getTenRandomQuestion.service";
import deleteQuestionService from "../services/question/deleteOneQuestion.service";
import getNumberOfQuestionOfEachCategory from "../services/question/getCountQuestionEachCategory";



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


const deleteQuestionController = async(req:Request,res:Response) => {
    const { questionId } = req.params

    try {
        await deleteQuestionService(Number(questionId))
        res
        .status(200)
        .json({
            success:true,
            data:null,
            message:"One question Deleted"
        })
    } catch (error) {
        handleError(res,error)
    }
}


const countQuestionsByCategory = async(req:Request,res:Response) =>{
    try {
        const questionsList: object= await getNumberOfQuestionOfEachCategory()
        res.json(questionsList)
    } catch (error) {
        handleError(res,error)
    }
}
export default {
    createQuestionAndChoises,
    getTenRandomQuestionsWithChoises,
    deleteQuestionController,
    countQuestionsByCategory
}