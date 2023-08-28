import { Router } from "express";
import { userRoutes } from "./user.routes";
import { routesLogin } from "./login.routes";
import { userRoutesLogout } from "./logout.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/login", routesLogin);
routes.use("/logout", userRoutesLogout);

export { routes };
