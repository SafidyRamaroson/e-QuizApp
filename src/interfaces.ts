

/* ----------------------------- User Interface ----------------------------- */
interface IUser {
    name:string
    email:string
    isAdmin:boolean
}

/* ---------------------------- Question Interface --------------------------- */
interface IQuestion {
    content:string
}


/* ----------------------- Category Question Interface ---------------------- */
interface ICategory {
    name:Category
}

/* ---------------------------- Answer Interface ---------------------------- */
interface IAnswer {
    content:string
    question_id:number
    is_correct:boolean
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

/* ------------------------- Enum category question ------------------------- */
enum Category {
    JAVASCRIPT,
    ReactJS
}