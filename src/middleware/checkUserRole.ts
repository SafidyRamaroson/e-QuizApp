import { Request,Response,NextFunction } from "express";
import handleError from "../utils/handleError";
import getInstancePrisma from "../utils/prisma/getInstancePrisma";
import { httpMessage } from "../utils/http.message";

const checkUserRole = async(req:Request,res:Response,next:NextFunction) => {
    const { id } = req.params
    const prisma = getInstancePrisma()
    try {
        const user  = await prisma.user.findUnique({
            where:{
                id:Number(id)
            }
        })

        if(!user){
            return res
            .json({
                success:false,
                data:null,
                message:httpMessage.ACCOUNT_NOT_FOUND
            })
        }
        
        // enable to do special anything service if isAdmin is true
        const isAdmin = user?.isAdmin
        
        if(!isAdmin){
            return res
            .json({
                success:false,
                data:null,
                message:"You aren't enable to do this request"
            })
        }

        next()
    } catch (error) {
        handleError(res,error)
    }
}

export default checkUserRole