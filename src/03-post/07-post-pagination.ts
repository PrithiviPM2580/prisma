import prisma from "../prisma-client";

export const postPagination = async () => {
  const [post1, post2, post3] = await Promise.all([
    prisma.post.findMany({
      orderBy: {
        id: "asc",
      },
      take: 5,
    }),

    prisma.post.findMany({
      orderBy: {
        id: "asc",
      },
      skip: 5,
      take: 5,
    }),

    prisma.post.findMany({
      orderBy: {
        id: "asc",
      },
      skip: 15,
      take: 5,
    }),
  ]);

  console.log(post1, post2, post3);
  return [post1, post2, post3];
};
