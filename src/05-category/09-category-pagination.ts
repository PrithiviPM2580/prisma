import prisma from "../prisma-client";

export const categoryPagination = async (
  take: number,
  skip: number,
  cursor: number,
) => {
  const [one, two, three, four] = await Promise.all([
    prisma.category.findMany({
      take,
    }),
    prisma.category.findMany({
      skip,
    }),
    prisma.category.findMany({
      cursor: {
        id: cursor,
      },
    }),
    prisma.category.findMany({
      take,
      skip,
    }),
  ]);

  if (!cursor) throw new Error("Category not found");

  console.log(one, two, three, four);
  return [one, two, three, four];
};
