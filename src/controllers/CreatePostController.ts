import { Request, Response } from "express"
import { CreatePostService } from "../services/CreatePostService";

class CreatePostController{
    async handle(req: Request, res: Response){
        const { title, content } = req.body
        const createPostService = new CreatePostService()

        const post = await createPostService.execute({title, content})

        return res.json(post)
    }
}

export { CreatePostController }