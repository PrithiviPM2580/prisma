import prisma from "../prisma-client";

export const userPosts = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      posts: {
        select: {
          title: true,
          published: true,
        },
      },
    },
  });

  if (!user) throw new Error("User not found.");

  console.log(user);
  return user;
};
