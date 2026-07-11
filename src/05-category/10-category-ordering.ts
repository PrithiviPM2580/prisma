import prisma from "../prisma-client";

export const categoryOrdering = async () => {
  const [one, two, three, four, five] = await Promise.all([
    prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    }),
    prisma.category.findMany({
      orderBy: {
        name: "desc",
      },
    }),
    prisma.category.findMany({
      orderBy: {
        posts: {
          _count: "desc",
        },
      },
    }),
    prisma.category.findMany({
      orderBy: {
        id: "desc",
      },
    }),
    prisma.category.findMany({
      orderBy: [
        {
          posts: {
            _count: "desc",
          },
        },
        {
          name: "asc",
        },
      ],
    }),
  ]);

  console.log(one, two, three, four, five);
  return [one, two, three, four, five];
};
