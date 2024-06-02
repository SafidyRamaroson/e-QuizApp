import express, { Express,NextFunction,Request,Response } from "express"
import cors from "cors"
import appConfig from "./config/app.config"
import apiRoute from "./routes/index"

const app:Express = express()
const { corsOptions } = appConfig

app.use(express.json())
app.use(cors(corsOptions))

/* --------------------------- Define an API route -------------------------- */
app.use("/api/v1",apiRoute);

/* ------------------------- Manage route not found ------------------------- */
app.use((req:Request,res:Response,next:NextFunction)=>{
    const error = new Error()
    error.message= "NOT FOUND"
    next(error)
});

export default app
