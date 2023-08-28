import { Request, Response } from "express";
import { CreateUser } from "../../model/user/CreateUser";
import { hashPassword } from "../../utils/auth";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, username, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const createUser = new CreateUser();

    const result = await createUser.execute({
      name,
      email,
      username,
      password: hashedPassword,
    });

    return res.status(201).json(result);
  }
}
