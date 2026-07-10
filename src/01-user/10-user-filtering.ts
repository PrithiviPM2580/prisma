import prisma from "../prisma-client";

export const userFiltering = async () => {
  const user = await prisma.user.findMany({
    where: {
      age: {
        gt: 18,
      },
      AND: [
        {
          role: "USER",
        },
        {
          city: "Kathmandu",
        },
      ],
    },
    select: {
      name: true,
      email: true,
      age: true,
      city: true,
      role: true,
    },
    orderBy: {
      age: "desc",
    },
  });

  console.log(user);
  return user;
};
