import { PrismaClient, User } from "@prisma/client"

const checkUserExistence  = async(email:string):Promise<User | null > => {

    const prisma  = new PrismaClient()
    const user:User|null = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    return user
}

export default checkUserExistence