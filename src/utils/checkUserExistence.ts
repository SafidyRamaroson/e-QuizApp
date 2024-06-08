import { User } from "@prisma/client"
import getInstancePrisma from "./prisma/getInstancePrisma"

const prisma = getInstancePrisma()
const checkUserExistence  = async(email:string,userId?:number):Promise<User | null > => {

    if(userId){
        return await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
    }

    return await prisma.user.findUnique({
        where:{
            email
        }
    })
}


export default checkUserExistence