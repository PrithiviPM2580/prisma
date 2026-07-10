import prisma from "../prisma-client";

export const postOrdering = async () => {
  const [newData, oldData, mostViews, aToz, zToa] = await Promise.all([
    prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.post.findMany({
      orderBy: {
        createdAt: "asc",
      },
    }),
    prisma.post.findMany({
      orderBy: {
        views: "desc",
      },
    }),
    prisma.post.findMany({
      orderBy: {
        title: "desc",
      },
    }),
    prisma.post.findMany({
      orderBy: {
        title: "asc",
      },
    }),
  ]);

  console.log(newData, oldData, mostViews, aToz, zToa);
  console.log(newData, oldData, mostViews, aToz, zToa);
};
