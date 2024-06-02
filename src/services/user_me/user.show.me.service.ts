import { number } from "zod";
import { httpMessage } from "../../utils/http.message";
import getInstancePrisma from "../../utils/prisma/getInstancePrisma";

const show_me = async(userId:number) => {
    const prisma  = getInstancePrisma()

    try {
        const user  = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
        
        if(!user){
            throw new Error(httpMessage.ACCOUNT_NOT_FOUND)
        }

        return user
    } catch (error) {
        throw new Error((error as Error)?.message)
    }
}

export default show_me;