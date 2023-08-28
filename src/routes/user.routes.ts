import { GetAllUserController } from "../controller/user/GetAllUserController";
import { CreateUserController } from "../controller/user/CreateUserController";

import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";

const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", authenticateToken, getAllUserController.handle);

export { userRoutes };
