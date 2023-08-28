import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { LogoutController } from "../controller/logout/LogoutController";

const logout = new LogoutController();

const userRoutesLogout = Router();

userRoutesLogout.patch("/:userId", authenticateToken, logout.handle);

export { userRoutesLogout };
