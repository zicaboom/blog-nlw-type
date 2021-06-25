import { getCustomRepository } from "typeorm"
import { PostsRepositories } from "../repositories/PostsRepositories"

interface IPostCreate{
    title: string
    content: string
}

class CreatePostService{
    async execute({title, content} : IPostCreate){
        const postsRepository = getCustomRepository(PostsRepositories)

        if(!title){
            throw new Error("Title incorrect")
        }
        if(!content){
            throw new Error("Content incorrect")
        }

        const titleAlreadyExists = await postsRepository.findOne({title})

        if(titleAlreadyExists){
            throw new Error("Title already exists")
        }
        const contentAlreadyExists = await postsRepository.findOne({content})

        if(contentAlreadyExists){
            throw new Error("Content already exists")
        }

        const post = postsRepository.create({
            title,
            content
        })

        await postsRepository.save(post)

        return post
    }
}
export { CreatePostService }