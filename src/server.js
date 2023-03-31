import express from "express";
import morgan from "morgan";
import cors from "cors";
import { signIn, signUp } from "./handlers/user.js";
import { createFoodItem, getFoodItem, deleteFoodItem , updateFoodItem } from "./handlers/foodItem.js";
import { createOrderList ,getOrderList, updateOrderList, delteeOrderList} from "./handlers/order.js";

const app = express();

//post - create
//get - getting valuse from db
//put - for updating value in db
//delete - Deleting the data

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// User Authentication 

app.post("/signup", signUp);
app.post("/signIN", signIn);

// Food Item

app.post("/createFoodItem", createFoodItem);
app.get("/getFoodItem", getFoodItem);
app.delete("/deleteFoodItem", deleteFoodItem);
app.put("/updateFoodItem", updateFoodItem);

//Order list
app.post("/createOrderList",createOrderList);
app.get("/getOrderList",getOrderList);
app.put("/updateOrderList", updateOrderList);
app.delete("/delteeOrderList", delteeOrderList);



export default app;
