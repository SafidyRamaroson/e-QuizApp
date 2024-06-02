import { Response } from "express"

const handleError = (res:Response,error:any) => {
    console.log(error.message)
    res
    .status(500)
    .json({
        success:false,
        data:null,
        message:error.message,
    })
}

export default handleError