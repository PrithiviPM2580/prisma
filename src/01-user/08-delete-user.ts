import prisma from "../prisma-client";

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  console.log(user);
  return user;
};
