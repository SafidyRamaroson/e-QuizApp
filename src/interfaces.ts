import { CategoryQuizz } from "@prisma/client"
/* ---------------------------- User Interface ----------------------------- */
interface IUser {
    name:string
    email:string
    password:string
    isAdmin:boolean
}

/* ---------------------------- Question Interface --------------------------- */
interface IQuestion {
    content:string
}


/* ----------------------- Category Question Interface ---------------------- */
interface ICategory {
    id:number
    name:String
}

/* ---------------------------- Choice Interface ---------------------------- */
interface IChoice {
    content:string
    is_correct:boolean
    questionId:number
}

/* -------------------------- QuizzAnswer Interface ------------------------- */
interface IQuizzAnswer {
    start_time:Date
    end_time:Date
}

/* -------------------------- User answer Interface ------------------------- */
interface IUserAnswer {
    quizz_session_id:number 
    question_id:number
    answer_id:number
    is_correct:number
}

interface ILogin {
    email:string
    password:string
}

/* -------------------------- Optin Mail Interface -------------------------- */
interface IOptionMailer {
    emailReceivers:string[] | string
    subject:string
    message:any
}

interface IInputChoice {
    content:string
    is_correct:boolean
}
/* -------------------------- Input create Question ------------------------- */

interface IInputCreateQuestion {
    content:string
    category:ICategory
    choises:IInputChoice[]
}

export { 
    IUser,
    IChoice,
    IQuestion,
    IQuizzAnswer,
    IUserAnswer,
    ICategory,
    ILogin,
    IOptionMailer,
    IInputCreateQuestion,
    IInputChoice
 }