import prisma from "../prisma-client";

export const endsWith = async (name: string) => {
  const user = await prisma.user.findMany({
    where: {
      email: {
        endsWith: name,
      },
    },
    select: {
      name: true,
      email: true,
    },
  });

  if (!user) throw new Error("User not found");

  console.log(user);
  return user;
};
