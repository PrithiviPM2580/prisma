import prisma from "../prisma-client";

export const include = async (id: number) => {
  const users = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      posts: {
        select: {
          title: true,
          published: true,
        },
      },
    },
  });

  if (!users) throw new Error("Users not found");

  console.log(users);
  return users;
};
