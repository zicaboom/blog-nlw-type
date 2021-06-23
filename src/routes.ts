import { Router } from "express"
import { CreatePostController } from "./controllers/CreatePostController"

const router = Router()

const createPostController = new CreatePostController()

router.post("/posts", createPostController.handle)

export{ router }