import { PrismaClient } from "@prisma/client";

const getInstancePrisma = () => {
    return new PrismaClient
}

export default  getInstancePrisma;