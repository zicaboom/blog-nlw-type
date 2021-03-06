import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreatePostController } from "./controllers/CreatePostController"
import { CreateUserController } from "./controllers/CreateUserController"
import { ListPostsController } from "./controllers/ListPostsController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = Router()

const createUserController = new CreateUserController()
const createPostController = new CreatePostController()
const authenticateUserController = new AuthenticateUserController()
const listPostsController = new ListPostsController()

router.post("/users", createUserController.handle)
router.post("/posts", ensureAuthenticated, ensureAdmin, createPostController.handle)
router.post("/login", authenticateUserController.handle)

router.get("/posts", ensureAuthenticated, listPostsController.handle)
export{ router }