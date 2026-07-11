import prisma from "../prisma-client";

export const orderBy = async () => {
  const [users, posts, categories] = await Promise.all([
    prisma.user.findMany({
      orderBy: {
        name: "asc",
      },
    }),
    prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.category.findMany({
      orderBy: {
        name: "desc",
      },
    }),
  ]);

  console.log(users, posts, categories);
  return [users, posts, categories];
};
