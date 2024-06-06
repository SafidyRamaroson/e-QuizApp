import { Difficulty } from "@prisma/client";
import getInstancePrisma from "../../utils/prisma/getInstancePrisma";
import getOneQuestionWithChoices from "./getOneQuestionWithChoice";


const getTenRandomQuestionsWithChoises = async(difficulty:Difficulty) => {
    const prisma = getInstancePrisma()
    const numberRandomQuestions = 10
    const listObjectQuestionsIDHasDifficulty:{id:number}[] | null = await prisma.question.findMany({
        where:{
            difficulty
        },
        select:{
            id:true
        }
    })

    const listQuestionIDhasDifficulty = listObjectQuestionsIDHasDifficulty.map((ObjectQuestionsIDHasDifficulty)=> ObjectQuestionsIDHasDifficulty.id)
    const shuffleQuestionIDhasDifficulty = listQuestionIDhasDifficulty.sort(()=> 0.5- Math.random()).slice(0,10)
    const numberQuestions = listObjectQuestionsIDHasDifficulty.length

    if( numberQuestions< numberRandomQuestions){
        throw new Error("Not Enough Questons")
    }
    
    let startQuestion:number  = 0
    let tenQuestionsListRandom:object[] = []
    while(startQuestion < numberRandomQuestions){
        let questionWithChoice =await  getOneQuestionWithChoices(shuffleQuestionIDhasDifficulty[startQuestion])
        tenQuestionsListRandom.push(questionWithChoice)
        startQuestion ++
    }
    
    return tenQuestionsListRandom
}


export default getTenRandomQuestionsWithChoises