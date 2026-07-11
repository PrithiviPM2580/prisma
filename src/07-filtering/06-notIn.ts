import prisma from "../prisma-client";

export const notIn = async () => {
  const user = await prisma.user.findMany({
    where: {
      role: {
        notIn: ["ADMIN"],
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  if (!user) throw new Error("User not found");

  console.log(user);
  return user;
};
