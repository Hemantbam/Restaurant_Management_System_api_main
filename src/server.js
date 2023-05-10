import express from "express";
import morgan from "morgan";
import cors from "cors";
import { signIn, signUp } from "./handlers/user.js";
import { createFoodItem, getFoodItem, deleteFoodItem , updateFoodItem } from "./handlers/foodItem.js";
import { createOrder ,getOrder, updateOrder, updateServe, getUnserved, getComplete} from "./handlers/order.js";
import { createEmployee ,getEmployee, updateEmployee, deleteEmployee} from "./handlers/Employee.js";
import { signInEmployee } from "./handlers/employeeAuth.js";
import { getTotalEmployee, getTotalFoodItems, getTotalSales} from "./handlers/getTotal.js";

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
app.get("/", signIn);

// Food Item

app.post("/createFoodItem", createFoodItem);
app.get("/getFoodItem", getFoodItem);
app.delete("/deleteFoodItem", deleteFoodItem);
app.put("/updateFoodItem", updateFoodItem);
app.get("/unserved/:id", getUnserved);
app.get("/complete/:id", getComplete);

//Order list
app.post("/createOrderList",createOrder);
app.get("/getOrderList",getOrder);
app.put("/updateOrderList", updateOrder);
app.put("/updateServe", updateServe);

app.post("/createEmployee",createEmployee);
app.get("/getEmployee",getEmployee);
app.put("/updateEmployee", updateEmployee);
app.delete("/deleteEmployee", deleteEmployee);

//Total number details
app.get("/getTotalEmployee/:id", getTotalEmployee);
app.get("/getTotalFoodItems/:id", getTotalFoodItems);
app.get("/getTotalSales/:id", getTotalSales);

// Authenticate the Employee loh in 
app.post("/signinemployee", signInEmployee);

// Admin Dashboard functionalities 
app.post("/signup", signUp);
app.post("/signin", signIn);
app.get("/getTotalEmployees/:id", getTotalEmployee);
app.get("/getTotalFoodItems/:id", getTotalFoodItems);
app.get("/getTotalSales/:id", getTotalSales);

app.put("/createBill", createBill);
app.get("/getBilling/:id", getBilling);
export default app;
