import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { PostsRepositories } from "../repositories/PostsRepositories"

class ListPostsService{
    async execute(){
        const postsRepository = getCustomRepository(PostsRepositories)

        const posts = await postsRepository.find()

        return classToPlain(posts)
    }
}

export { ListPostsService }