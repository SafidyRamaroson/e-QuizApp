import { Response } from "express"
import { httpMessage } from "../../utils/http.message"
import bcrypt from "bcrypt"
import genTokenUser from "../../utils/generateToken"
import { ILogin,IUser } from "../../interfaces";
import checkUserExistence from "../../utils/checkUserExistence"
import dotenv from "dotenv"
import { User } from "@prisma/client"

dotenv.config()
const handleLogin = async(res:Response,data:ILogin) => {
    const { email,password } = data

    const foundUser:User|null = await checkUserExistence(email)

    if(!foundUser){
        throw new Error(httpMessage.ACCOUNT_NOT_FOUND)
    }
    
    const isMatchPassword:boolean = await bcrypt.compare(password,foundUser.password)

    if(!isMatchPassword){
        throw new Error(httpMessage.WRONG_PASSWORD)
    }
    
    const tokenUser  = await genTokenUser(foundUser, process.env.JWT_AUTH_SECRET as string,process.env.EXPIRES_TOKEN_AUTH_IN as string)
    
    res
    .status(200)
    .json({
        success:true,
        data:tokenUser,
        message:httpMessage.WELCOME_BACK_ACCOUNT
    })
}

export default handleLogin