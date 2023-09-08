import { User } from "@prisma/client";
import { AppError } from "../../errors/AppError";
import { prisma } from "../../prisma/client";
import { comparePasswords, generateToken } from "../../utils/auth";

export class Login {
  async execute({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User> {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await comparePasswords(password, user.password))) {
      throw new AppError("Credenciais inválidas", 200);
    }

    const token = generateToken({ email });

    const userUpdated = await prisma.user.update({
      where: { id: user.id },
      data: { token },
    });

    if (!userUpdated) {
      throw new AppError("Não foi possivel atualizar", 401);
    }

    return userUpdated;
  }
}
