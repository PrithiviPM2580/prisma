import prisma from "../prisma-client";

export const select = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  if (!users) throw new Error("Users not found");

  console.log(users);
  return users;
};
