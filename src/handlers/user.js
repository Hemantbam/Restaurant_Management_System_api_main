import prisma from "../db.js";
import { comparePassword, createJWT, hashPassword } from "../modules/auth.js"; // import several functions from external modules 

export const signUp = async (req, res) => {
  const user = await prisma.user.create({  // prisma function create used to add the new user record to the database
    data: {
      username: req.body.username,
      email: req.body.email,
      restaurant_name: req.body.restaurant_name,
      phone_number: req.body.phone_number,
      password: await hashPassword(req.body.password), // store the password into hascode into database
    },
  });
  const token = createJWT(user);
  res.json({ token });
};

export const signIn = async (req, res) => {  // the function uses request and response parameter to handel sign in proces
  console.log(req.body.username);               
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValid = await comparePassword(req.body.password, user.password);  // compare the user input password with database password

  if (!isValid) {
    res.status(401);  // response the 404 unauthorized message if isValid returns false
    res.json({ message: "NOPE" });
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};
