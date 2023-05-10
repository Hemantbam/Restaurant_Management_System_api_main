import prisma from "../db.js";

export const createOrder = async (req, res) => {
  try {
    const data = await prisma.order.createMany({
      data: req.body,
    });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrder = async (req, res) => {
  try {
    const data = await prisma.order.findMany({
      where: {
        isCompleted: false,
        adminid: req.params.id,
      },
    });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBilling = async (req, res) => {
  try {
    const data = await prisma.order.findMany({
      where: {
        isBilled: false,
        isCompleted: true,
        adminid: req.params.id,
      },
    });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUnserved = async (req, res) => {
  try {
    const data = await prisma.order.findMany({
      where: {
        isServed: false,
        isCompleted: true,
        adminid: req.params.id,
      },
    });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getComplete = async (req, res) => {
  try {
    const data = await prisma.order.findMany({
      where: {
        isServed: true,
        isCompleted: true,
        isBilled: true,
        adminid: req.params.id,
      },
    });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const data = await prisma.order.update({
      where: {
        id: req.body.id,
      },
      data: {
        isCompleted: req.body.isCompleted,
      },
    });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateServe = async (req, res) => {
  try {
    const data = await prisma.order.update({
      where: {
        id: req.body.id,
      },
      data: {
        isServed: req.body.isServed,
      },
    });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBill = async (req, res) => {
  try {
    const data = await prisma.order.update({
      where: {
        id: req.body.id,
      },
      data: {
        isBilled: req.body.isBilled,
      },
    });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};
