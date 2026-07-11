import prisma from "../prisma-client";

export const or = async (name: string) => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          role: "ADMIN",
        },
        {
          email: {
            endsWith: name,
          },
        },
      ],
    },
    select: {
      name: true,
      email: true,
      role: true,
    },
  });

  if (!users) throw new Error("Users not found");

  console.log(users);
  return users;
};
