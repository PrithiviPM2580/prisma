import prisma from "../prisma-client";

export const userProfile = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      profile: {
        select: {
          bio: true,
          website: true,
          github: true,
        },
      },
    },
  });

  if (!user) throw new Error("User not found");

  console.log(user);
  return user;
};
