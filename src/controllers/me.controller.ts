import { Response, Request } from "express";
import showMeService from "../services/user_me/user.show.me.service";
import handleError from "../utils/handleError";
import { User } from "@prisma/client";
import updateMeService from "../services/user_me/user.update.me";
import getHashedPassword from "../utils/hashPassword";
import deleteMeService from "../services/user_me/user.delete.me.service";

const userProfil  = async(req:Request,res:Response) => {
    const { id } = req.params
    
    try {
       const targetUser:User =  await showMeService(Number(id))
       res
       .status(200)
       .json({
        success:true,
        data:targetUser,
        message:"User Profil Data"
       })
    } catch (error) {
        handleError(res,error)
    }
}


const updateUserProfil = async(req:Request,res:Response) => {

    const { id } = req.params
    const { password }= req.body
    
    try {

        let userUpdateInput = {...req.body}
        if(password){
            const hashedPassword =await getHashedPassword(password)
            userUpdateInput = { ...userUpdateInput , password:hashedPassword}
        }

        const updateUser = await updateMeService(userUpdateInput,Number(id))
        res
        .status(200)
        .json({
            success:true,
            data:updateUser,
            message:"User profil updated"
        })
    } catch (error) {
        handleError(res,error)   
    }
}

const deleteUser = async(req:Request,res:Response) => {
    const { id } = req.params

    try {
        
        await deleteMeService(Number(id))
        res
        .status(204)
        .send()

    } catch (error) {
        handleError(res,error)
    }
}
export default {
    userProfil,
    updateUserProfil,
    deleteUser
}