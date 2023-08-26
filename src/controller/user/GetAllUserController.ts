import { Request, Response } from "express";
import { GetAllUser } from "../../model/user/GetAllUser";

export class GetAllUserController {
  async handle(req: Request, res: Response) {
    const getAllUser = new GetAllUser();
    const result = await getAllUser.execute();

    return res.status(200).json(result);
  }
}
