import express,{ Router } from "express";
import authMeController from "../controllers/me.controller";

const router:Router = express.Router()

router.get("/:id",authMeController.userProfile)

export default router
