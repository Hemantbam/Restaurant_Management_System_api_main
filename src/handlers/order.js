import prisma from "../db.js";

export const createOrderList = async (req, res) => {  // Add the order to the databse 
    const order = await prisma.Order.create({  //prisma create function used to add new records
      data: {
        food_name: req.body.foodName,
        quantity: req.body.foodQuantity,
        description: req.body.foodDescription,
        table_number: req.body.orderTableNumber,
        isCompleted: req.body.orderCompleted ,
        price:req.body.orderfoodPrice 
      },
  
    });
  
    res.json({ data:order  });
  };


  export const getOrderList = async (req, res) => {  // Show the order list data to clint side from the database
    const order = await prisma.Order.findMany();  // prisma findMany function used to show all available order list
    res.json({ data:order  });
  };


  export const updateOrderList = async (req, res) => {  // update the order data to database using the order ID by the user
    const order = await prisma.Order.update({   // prisma update function used to update the data to the database
      where: {
        id: req.body.id,
      },
      data: {
        food_Name: req.body.foodName,
        quantity: req.body.foodQuantity,
        description: req.body.foodDescription,
        table_number: req.body.orderTableNumber,
        isCompleted: req.body.orderCompleted 
      },
    });
  
    res.json({ data:order  });
  };


  export const delteeOrderList = async (req, res) => { // delete the customer order item  by the unique food item ID
   const order =  await prisma.Order.delete({
     where: {
       id: req.body.id,    
     }
   });
   res.json({ data:order  });
  };