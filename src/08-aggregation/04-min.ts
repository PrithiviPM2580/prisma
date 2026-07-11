import prisma from "../prisma-client";

export const min = async () => {
  const user = await prisma.user.aggregate({
    _min: {
      createdAt: true,
    },
  });

  if (!user) throw new Error("User not found");

  console.log(user);
  return user;
};
