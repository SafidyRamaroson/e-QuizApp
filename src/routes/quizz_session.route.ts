import express,{ Router } from "express";
import quizzSessionController from "../controllers/quizzSession";

const router:Router = express.Router()

router.post("/create/:userId",quizzSessionController.createQuizzSession)


export default router