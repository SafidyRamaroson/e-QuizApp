import express,{ Router } from "express";
import authMeController from "../controllers/me.controller";

const router:Router = express.Router()

router.get("/:id",authMeController.userProfil)
router.patch("/:id/edit",authMeController.updateUserProfil)

export default router
