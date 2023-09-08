import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  jwt.verify(token, secretKey as string, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: `Token inválido ${err}` });
    }
    // console.log(decoded);

    // req = decoded;
    next();
  });
}

export { authenticateToken };
