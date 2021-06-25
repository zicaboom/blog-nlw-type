import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs"

interface IUserCreate{
    name: string
    email: string
    password: string
    admin?: boolean
}

class CreateUserService{
    async execute({ name, email, password, admin = false}: IUserCreate){
        const usersRepository = getCustomRepository(UsersRepositories)

        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await usersRepository.findOne({ email })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        if(!password){
            throw new Error("Password incorrect")
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            email,
            name,
            password: passwordHash,
            admin
        })

        await usersRepository.save(user)

        return user
    }
}

export {CreateUserService}