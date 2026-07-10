import prisma from "../prisma-client";

export const findUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      email: true,
      city: true,
      role: true,
    },
  });
  console.log(user);
  return user;
};
