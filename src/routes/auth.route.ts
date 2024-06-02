import express,{ Router } from "express";
import authController from "../controllers/auth.controller";
const router:Router = express.Router()

router.post("/create",authController.createUser)
router.post("/login",authController.loginUser)



export default router