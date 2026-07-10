import prisma from "../prisma-client";

export const userWithProfile = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      email: true,
      age: true,
      profile: {
        select: {
          bio: true,
          website: true,
          github: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error("User profile not found");
  }

  console.log(user);
  return user;
};
