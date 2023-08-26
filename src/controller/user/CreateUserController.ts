import { Request, Response } from "express";
import { CreateUser } from "../../model/user/CreateUser";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, username } = req.body;

    const createUser = new CreateUser();

    const result = await createUser.execute({ name, email, username });

    return res.status(201).json(result);
  }
}
