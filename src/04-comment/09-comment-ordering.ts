import prisma from "../prisma-client";

export const commentOrdering = async () => {
  const [first, second, third, fourth] = await Promise.all([
    prisma.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),
    prisma.comment.findMany({
      orderBy: {
        createdAt: "asc",
      },
      take: 5,
    }),
    prisma.comment.findMany({
      orderBy: {
        user: {
          name: "asc",
        },
      },
      take: 5,
    }),
    prisma.comment.findMany({
      orderBy: {
        post: {
          title: "asc",
        },
      },
      take: 5,
    }),
  ]);

  console.log(first, second, third, fourth);
  return [first, second, third, fourth];
};
