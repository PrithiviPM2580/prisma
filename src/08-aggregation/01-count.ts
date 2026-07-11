import prisma from "../prisma-client";

export const count = async () => {
  const [users, posts] = await Promise.all([
    prisma.user.count(),
    prisma.post.aggregate({
      _count: {
        id: true,
      },
    }),
  ]);

  console.log(users, posts);
  return [users, posts];
};
