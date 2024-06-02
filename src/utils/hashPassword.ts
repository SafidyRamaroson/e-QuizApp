import bcrypt from "bcrypt"

const getHashedPassword = async(password:string):Promise <string> => {
    const salt:string = await  bcrypt.genSalt(10)
    
    const hashedPassword:string  = await bcrypt.hash(password,salt)

    return hashedPassword
}

export default getHashedPassword