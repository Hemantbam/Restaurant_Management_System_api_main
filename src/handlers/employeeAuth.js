import prisma from "../db.js";
import { comparePassword, createJWT } from "../modules/auth.js";

export const signInEmployee = async (req, res) => {
  try {
    const user = await prisma.employee.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.status(401);
      res.json({ message: "Incorrect user email" });
      return;
    }
    const isValid = await prisma.employee.findFirst({
      where: {
        password: req.body.password,
      },
    });
    if (!isValid) {
      res.status(401);
      res.json({ message: "Incorrect Password" });
      return;
    }
    const token = createJWT(user);
    res.json({ token, user });
  } catch (error) {
    console.log(error.message);
  }
};
