import prisma from "../db.js";

export const createEmployee = async (req, res) => {  // Add the new Employee to the databse 
    const order = await prisma.Order.create({  //prisma create function used to add record
      data: {
        id: req.body.emp_id,
        f_Name: req.body.f_Name,
        l_Name: req.body.l_Name,
        work_as: req.body.work_as,
        email:req.body.email,
        createdAt: req.body.createdAt ,
        phone_number:req.body.phone_number, 
        adminref: req.body.adminref,
        adminA: req.body.adminA ,
        password:req.body.password
      },
  
    });
  
    res.json({ data:order  });
  };


  export const getEmployee = async (req, res) => {  // Show the Employee data to clint side from the database
    const order = await prisma.Order.findMany();  // prisma findMany function used to show all available data of the table
    res.json({ data:order  });
  };


  export const updateEmployee = async (req, res) => {  // update the Employee to database using the employee id by the user
    const order = await prisma.Order.update({   // prisma update function used to update the data to the database
      where: {
        id: req.body.id,
      },
      data: {
        f_Name: req.body.f_Name,
        l_Name: req.body.l_Name,
        work_as: req.body.work_as,
        email:req.body.email,
        createdAt: req.body.createdAt ,
        phone_number:req.body.phone_number, 
        adminref: req.body.adminref,
        adminA: req.body.adminA ,
        password:req.body.password
      },
    });
  
    res.json({ data:order  });
  };


  export const deleteEmployee = async (req, res) => { // delete the customer order item  by the unique food item ID
   const order =  await prisma.Order.delete({
     where: {
       id: req.body.id,    
     }
   });
   res.json({ data:order  });
  };