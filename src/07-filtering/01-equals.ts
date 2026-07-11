import prisma from "../prisma-client";

export const equals = async () => {
  const user = await prisma.user.findMany({
    where: {
      role: {
        equals: "ADMIN",
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
