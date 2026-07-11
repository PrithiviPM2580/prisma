import prisma from "../prisma-client";

export const findCategory = async (name: string) => {
  const category = await prisma.category.findUnique({
    where: {
      name,
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
