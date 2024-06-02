import getInstancePrisma from "../../utils/prisma/getInstancePrisma";

const delete_me  = async(userId:number):Promise<void> => {
    const prisma = getInstancePrisma()
    
    try {
        await prisma.user.delete({
            where:{
                id:userId
            }
        })
    } catch (error) {
        throw new Error((error as Error).message)
    }
}

export default delete_me