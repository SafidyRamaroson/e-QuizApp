import { httpMessage } from "../../utils/http.message";
import getInstancePrisma from "../../utils/prisma/getInstancePrisma";


const show_me = async(userId:number) => {
    const prisma  = getInstancePrisma()

    const user  = await prisma.user.findUnique({
        where:{
            id:userId
        }
    })

    if(!user){
        throw new Error(httpMessage.ACCOUNT_NOT_FOUND)
    }

    return user
}

export default show_me;