import prisma from "../db.js";

export const authChecker = async (email) => {
  const find = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (find) {
    return true;
  } else {
    return false;
  }
};
