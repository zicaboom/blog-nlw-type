import { Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface IPayLoad{
    sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end() 
    }

    const [, token] = authToken.split(" ")

    try{
        const { sub } = verify(token, "8df9e74d8628567c9b82b3cc658cbf9e") as IPayLoad

        req.user_id = sub

        return next()
    }catch(err){
        return res.status(401).end() 
    }
}