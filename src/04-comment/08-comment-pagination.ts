import prisma from "../prisma-client";

export const commentPagination = async (take: number, skip: number = 0) => {
  const [first, second, third] = await Promise.all([
    prisma.comment.findMany({
      take,
    }),
    prisma.comment.findMany({
      skip,
    }),
    prisma.comment.findMany({
      take,
      skip,
    }),
  ]);

  console.log(first, second, third);
  return [first, second, third];
};
