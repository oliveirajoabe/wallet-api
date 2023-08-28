import { Router } from "express";
import { LoginController } from "../controller/login/LoginController";

const login = new LoginController();

const routesLogin = Router();

routesLogin.post("/", login.handle);

export { routesLogin };
