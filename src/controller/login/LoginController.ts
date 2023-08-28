import { Request, Response } from "express";
import { Login } from "../../model/login/Login";

export class LoginController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const login = new Login();

    const result = await login.execute({ email, password });

    return res.status(200).json(result);
  }
}
