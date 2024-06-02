import handleLogin from "../services/user_auth/handleLogin";
import handleRegister from "../services/user_auth/handleRegister";
import { Response, Request } from "express";
import handleError from "../utils/handleError";
import { ILogin, IUser } from "../interfaces";


const createUser = async(req:Request,res:Response) =>{
    const userData:IUser = req.body 
    try {
        await handleRegister(userData,res)
    } catch (error) {
        handleError(res,error)
    }
}

const loginUser = async(req:Request, res:Response) =>{

    const userData:ILogin = req.body
    try {
        await handleLogin(res,userData)
    } catch (error) {
        handleError(res,error)
    }
}



export default {
    createUser,
    loginUser
}
