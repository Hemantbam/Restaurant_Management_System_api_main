import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

export const createJWT = (user) => {
  const token = jwt.sign({ id: user.id, email: user.email }, "cookies");
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "NOt Authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "NOt Authorized" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401);
    res.json({ message: "NOt Authorized" });
    return;
  }
};
