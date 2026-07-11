import prisma from "../prisma-client";

export const findAllCategory = async () => {
  const category = await prisma.category.findMany();

  if (!category) throw new Error("Category not found");

  console.log(category);
  return category;
};
