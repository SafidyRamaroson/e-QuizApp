import express,{ Router } from "express";
import authMeController from "../controllers/me.controller";

const router:Router = express.Router()

router.get("/:id",authMeController.userProfil)
router.patch("/:id/edit",authMeController.updateUserProfil)
router.delete("/:id/delete",authMeController.deleteUser)

export default router
