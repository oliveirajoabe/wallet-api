import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secretKey = process.env.SECRET_KEY;

function generateToken({ email }: { email: string }): string {
  return jwt.sign({ email }, secretKey as string);
}

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function comparePasswords(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export { generateToken, hashPassword, comparePasswords };
