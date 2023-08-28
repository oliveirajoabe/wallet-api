import { Request, Response } from "express";
import { Logout } from "../../model/logout/Logout";

export class LogoutController {
  async handle(req: Request, res: Response) {
    const userId = req.params.userId;

    console.log(userId);

    const logout = new Logout();

    const result = await logout.execute(userId);

    return res.status(200).json(result);
  }
}
