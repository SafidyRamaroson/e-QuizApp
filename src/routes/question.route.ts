import express,{ Router } from "express";
import questionController from "../controllers/question.controller";

const router:Router = express.Router()

router.post("/create",questionController.createQuestionAndChoises)


export default router