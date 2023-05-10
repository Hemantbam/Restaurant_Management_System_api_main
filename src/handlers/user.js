import prisma from "../db.js";
import { comparePassword, createJWT, hashPassword } from "../modules/auth.js"; // import several functions from external modules 

export const signUp = async (req, res) => {// add the new user record to the database
  try {
    const isRepeated = await authChecker(req.body.email);

    if (isRepeated) {
      res.status(401);
      res.json({ message: "Email Already Taken" });
      return;
    }
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        restaurant_name: req.body.restaurant_name,
        phone_number: req.body.phone_number,
        password: await hashPassword(req.body.password),// store the password into hascode into database
      },
    });
    const token = createJWT(user);
    res.json({ token, user });
  } catch (error) {
    console.log(error.message);
  }
};


export const signIn = async (req, res) => { // the function uses request and response parameter to handel sign in proces
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.status(401);
      res.json({ message: "Incorrect user email" });
      return;
    }
    const isValid = await comparePassword(req.body.password, user.password); // compare the user input password with database password
    if (!isValid) {
      res.status(401);
      res.json({ message: "Incorrect Password" }); // response the 404 unauthorized message if isValid returns false
      return;
    }
    const token = createJWT(user);
    res.json({ token, user });
  } catch (error) {
    console.log(error.message);
  }
};
