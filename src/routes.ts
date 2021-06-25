import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreatePostController } from "./controllers/CreatePostController"
import { CreateUserController } from "./controllers/CreateUserController"

const router = Router()

const createUserController = new CreateUserController()
const createPostController = new CreatePostController()
const authenticateUserController = new AuthenticateUserController()

router.post("/users", createUserController.handle)
router.post("/posts", createPostController.handle)
router.post("/login", authenticateUserController.handle)

export{ router }