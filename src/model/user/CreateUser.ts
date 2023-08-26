import { User } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { AppError } from "../../errors/AppError";

export class CreateUser {
  async execute({ name, email, username }: CreateUserInterface): Promise<User> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    const usernameAlreadyExists = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (userAlreadyExists || usernameAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
      },
    });

    return user;
  }
}
