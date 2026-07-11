import prisma from "../prisma-client";

export const inFilter = async () => {
  const user = await prisma.user.findMany({
    where: {
      role: {
        in: ["ADMIN", "USER"],
      },
    },
    select: {
      id: true,
      name: true,
      role: true,
    },
  });

  if (!user) throw new Error("User not found.");

  console.log(user);
  return user;
};
