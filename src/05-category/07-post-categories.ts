import prisma from "../prisma-client";

export const postCategories = async (id: number) => {
  const category = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!category) throw new Error("Category not found");

  console.log(category);
  return category;
};
