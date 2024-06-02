import express,{ Router } from "express";
import authRoutes from "./auth.route";
import meRoutes from "./me.route";
import categoryRoutes from "./category.route";
import questionRoutes from "./question.route";

const router:Router = express.Router()

router.use("/auth",authRoutes)
router.use("/me",meRoutes)
router.use("/category",categoryRoutes)
router.use("/question",questionRoutes)

export default router