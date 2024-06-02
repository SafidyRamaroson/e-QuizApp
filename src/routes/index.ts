import express,{ Router } from "express";
import authRoutes from "./auth.route";
import authMe from "./me.route";

const router:Router = express.Router()

router.use("/auth",authRoutes)
router.use("/me",authMe)

export default router