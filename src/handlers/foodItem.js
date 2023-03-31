import prisma from "../db.js";
import { comparePassword, createJWT, hashPassword } from "../modules/auth.js"; // import several functions from external modules 


export const createFoodItem = async (req, res) => {  // Add the new food item to the databse 
    const user = await prisma.foodItem.create({  //prisma create function used to add new records
      data: {
        food_Name: req.body.foodname,
        category: req.body.foodCategory,
        Ingredient: req.body.foodIngredient,
        price: req.body.foodPrice,
       
      }
  
    });
  
    res.json({ data:user  });
  };
  
  export const getFoodItem = async (req, res) => {  // Show the available food item data to clint side from the database
    const user = await prisma.foodItem.findMany();  // prisma findMany function used to show all available food item data
  
    res.json({ data:user  });
  };
  
  export const updateFoodItem = async (req, res) => {  // update the food item data to database using the food item ID by the user
    const user = await prisma.foodItem.update({   // prisma update function used to update the data 
      where: {
        id: req.body.id,
      },
      data: {
        food_Name: req.body.foodname,
        category: req.body.foodCategory,
        Ingredient: req.body.foodIngredient,
        price: req.body.foodPrice,
      },
    });
  
    res.json({ data:user  });
  };
  
  export const deleteFoodItem = async (req, res) => { // delete the food item by the unique food item ID
    const order= await prisma.foodItem.delete({
     where: {
       id: req.body.id,    
     }
   });
   res.json({ data:order  });
  };