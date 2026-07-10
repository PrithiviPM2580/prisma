import prisma from "../prisma-client";

export const updateUserRole = async (email: string) => {
  const user = await prisma.user.update({
    where: {
      email,
    },
    data: {
      role: "ADMIN",
    },
    select: {
      name: true,
      email: true,
      role: true,
    },
  });

  console.log(user);
  return user;
};
