import { httpMessage } from "../../utils/http.message";
import { IUser } from "../../interfaces";
import { Response } from "express";
import getHashedPassword from "../../utils/hashPassword";
import checkUserExistence from "../../utils/checkUserExistence";
import getInstancePrisma from "../../utils/prisma/getInstancePrisma";
import { PrismaClient,User } from "@prisma/client";

const handleRegister = async(userData:IUser,res:Response) => {
    const { email,password} = userData
    const prisma:PrismaClient = getInstancePrisma() 
    
    const foundUser:User|null = await checkUserExistence(email)

    if(foundUser){
        throw new Error(httpMessage.ACCOUNT_ALREADY_EXIST)
    }

    const hashedPassword:string = await getHashedPassword(password)
    
    const newUser = await prisma.user.create({
        data:{
           ...userData,
            password:hashedPassword
        }
    })

    res
    .status(201)
    .json({
        success:true,
        data:newUser,
        message:httpMessage.ACCOUNT_CREATED
    })
}

export default handleRegister