import prisma from "../prisma-client";

export const findAllUsers = async () => {
  const user = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      age: true,
      role: true,
    },
    orderBy: {
      age: "desc",
    },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  console.log(user);
  return user;
};
