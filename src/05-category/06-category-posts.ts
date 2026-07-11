import prisma from "../prisma-client";

export const categoryPosts = async (name: string) => {
  const category = await prisma.category.findUnique({
    where: {
      name,
    },
    select: {
      id: true,
      name: true,
      posts: {
        select: {
          id: true,
          title: true,
          published: true,
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

  console.log(category);
  return category;
};
