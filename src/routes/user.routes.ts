import { GetAllUserController } from "../controller/user/GetAllUserController";
import { CreateUserController } from "../controller/user/CreateUserController";

import { Router } from "express";

const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUserController.handle);

export { userRoutes };
