import { Response, Request } from "express";
import show_me_service from "../services/user_me/user_show_me.service";
import handleError from "../utils/handleError";
import { User } from "@prisma/client";

const userProfile  = async(req:Request,res:Response) => {
    const { id } = req.params

    try {
       const targetUser:User =  await show_me_service(Number(id))
       res
       .status(200)
       .json({
        success:true,
        data:targetUser,
        message:"User Profile Data"
       })
    } catch (error) {
        handleError(res,error)
    }
}

export default {
    userProfile
}