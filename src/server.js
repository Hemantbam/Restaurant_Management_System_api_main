import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createFoodItem, signIn, signUp } from "./handlers/user.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.post("/signup", signUp);
app.post("/signIN", signIn);

app.post("/food_Item", createFoodItem);
// app.get("/food_Item", getFoodItem);

//post - create
//get - getting valuse from db
//put - for updating value in db
//delete - 

export default app;
