import { IUser } from "../../interfaces";
import getInstancePrisma from "../../utils/prisma/getInstancePrisma";

const updateMe = async(userData:IUser,userIdTarget:number) => {
    const prisma  = getInstancePrisma()

    try {
        const updateUser = await prisma.user.update({
            where:{
                id:userIdTarget
            },
            data:userData
        })
        
        return updateUser
    } catch (error) {
        throw new Error((error as Error).message)
    }
   
}

export default updateMe