import { PrismaClient } from "@prisma/client";


let prisma:PrismaClient
const getInstancePrisma = () => {

    if(!prisma){
        prisma =  new PrismaClient()
    }
    return prisma
}

export default  getInstancePrisma;