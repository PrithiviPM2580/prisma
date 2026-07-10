import prisma from "../prisma-client";

export const updateUserName = async (id: number, name: string) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
    select: {
      id: true,
      name: true,
      email: true,
      updatedAt: true,
    },
  });

  console.log(user);
  return user;
};
