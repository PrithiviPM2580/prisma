import prisma from "../prisma-client";

export const skip = async () => {
  const [page1, page2, page3] = await Promise.all([
    prisma.post.findMany({
      skip: 0,
      take: 5,
    }),
    prisma.post.findMany({
      skip: 5,
      take: 5,
    }),
    prisma.post.findMany({
      skip: 10,
      take: 5,
    }),
  ]);

  console.log(page1, page2, page3);
  return [page1, page2, page3];
};
