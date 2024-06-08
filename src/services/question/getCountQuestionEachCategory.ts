import categoryQuestion from "../../constants/category";
import getQuestionByCategory from "./getCountQuestionByCategory.service";

const getNumberOfQuestionOfEachCategory = async() => {
    
    const questionCreatedJS = (await getQuestionByCategory(categoryQuestion.JAVASCRIPT+1))
    const questionCreatedReactJS = (await getQuestionByCategory(categoryQuestion.REACTJS+1))
    return {
        questionCreatedJS,
        questionCreatedReactJS
    }
}

export default getNumberOfQuestionOfEachCategory
