import { AppError } from "../../errors/AppError";
import { prisma } from "../../prisma/client";

export class Logout {
  async execute(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new AppError("Não foi possivel executar esta operação");
    }

    const updated = await prisma.user.update({
      where: { id: user?.id },
      data: { token: null },
    });

    return updated;
  }
}
