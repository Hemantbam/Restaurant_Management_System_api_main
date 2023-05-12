import * as fs from "fs";

export const createBill = async (req, res) => {
  try {
    const { id, table_number, price, timestamp } = req.body;
    fs.writeFileSync(
      `./src/bills/bill-${id}.txt`,
      `Bill for:\nTable Number: ${table_number}\nCreate at ${timestamp}\nThe total amount: ${price}`
    );
    res.json({ message: "done" });
  } catch (error) {
    console.log(error.message);
  }
};
