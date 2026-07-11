import prisma from "../prisma-client";

export const startsWith = async (name: string) => {
  const category = await prisma.category.findMany({
    where: {
      name: {
        startsWith: name,
      },
    },
    select: {
      id: true,
      name: true,
    },
  });

  if (!category) throw new Error("Category not found");

  console.log(category);
  return category;
};
