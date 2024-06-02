import express,{ Router } from "express";
import categoryController from "../controllers/category.controller";
import checkUserRole from "../middleware/checkUserRole";

const router:Router = express.Router()

router.get("/",categoryController.categoryQuizzList)
router.post("/create/:id",checkUserRole,categoryController.createCategory)

export default router