import prisma from "../db.js";
import { comparePassword, createJWT, hashPassword } from "../modules/auth.js";

export const signUp = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      email: req.body.email,
      restaurant_name: req.body.restaurant_name,
      phone_number: req.body.phone_number,
      password: await hashPassword(req.body.password),
    },
  });
  const token = createJWT(user);
  res.json({ token });
};

export const signIn = async (req, res) => {
  console.log(req.body.username);
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValid = await comparePassword(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "NOPE" });
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};
export const createFoodItem = async (req, res) => {
  const user = await prisma.foodItem.create({
    data: {
      food_Name: req.body.foodname,
      category: req.body.foodCategory,
      Ingredient: req.body.foodIngredient,
      price: req.body.foodPrice,
      // photo_Src: req.body.photoSrc == null
    },

  });

  res.json({ data:user  });
};

export const getFoodItem = async (req, res) => {
  const user = await prisma.foodItem.findMany();

  res.json({ data:user  });
};

