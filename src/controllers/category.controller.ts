import { CategoryQuizz } from "@prisma/client";
import categoryService from "../services/category/category.service";
import handleError from "../utils/handleError";
import { Request, Response } from "express";

const createCategory = async(req:Request,res:Response) => {
    const { name } = req.body
    const { id } = req.params
    try {
        const newCategory:CategoryQuizz = await categoryService.createCategory(name,Number(id))
        res
        .status(201)
        .json({
            success:true,
            data:newCategory,
            message:"Category Question created"
        })
    } catch (error) {
        handleError(res,error)
    }
}


const categoryQuizzList = async(req:Request,res:Response) => {
    
    try {
        const categories = await  categoryService.getCategoryQuizzList()
        res
        .status(200)
        .json({
            success:true,
            data:categories,
            message:"List of category quizz"
        })

    } catch (error) {
        handleError(res,error)
    }
}

export default {
    createCategory,
    categoryQuizzList
}