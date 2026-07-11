import prisma from "../prisma-client";

export const categoryFiltering = async (name: string) => {
  const category = await prisma.category.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
      posts: {
        some: {
          published: true,
        },
      },
    },
    select: {
      name: true,
      posts: {
        where: {
          published: true,
        },
        select: {
          id: true,
        },
      },
      _count: {
        select: {
          posts: true,
        },
      },
    },
  });

  if (!category) throw new Error("Category not found");

  console.log(JSON.stringify(category, null, 2));
  return category;
};
