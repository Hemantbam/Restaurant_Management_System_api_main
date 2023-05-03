import prisma from "../db.js";

export const getTotalEmployee = async (req, res) => {
  try {
    const count = await prisma.employee.count({
      where: {
        adminid: req.params.id,
      },
    });
    res.json({ data: count });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTotalFoodItems = async (req, res) => {
  try {
    const count = await prisma.food_items.count({
      where: {
        adminid: req.params.id,
      },
    });

    res.json({ data: count });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTotalSales = async (req, res) => {
  try {
    const count = await prisma.order.count({
      where: {
        adminid: req.params.id,
        isBilled: true,
        isServed: true,
        isCompleted: true,
      },
    });

    res.json({ data: count });
  } catch (error) {
    console.log(error.message);
  }
};
