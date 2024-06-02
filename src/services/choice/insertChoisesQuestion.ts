import getInstancePrisma from "../../utils/prisma/getInstancePrisma";
import { IChoice } from "../../interfaces";
;

const insertChoisesOfOneQuestion = async(choises:IChoice[]):Promise <void> => {

    const prisma = getInstancePrisma()

    try {
        for(const choice of choises){
            await prisma.choice.create({
                data:{
                    ...choice
                }
           })
        }
    } catch (error) {
        throw new Error((error as Error).message)
    }
}


export default insertChoisesOfOneQuestion