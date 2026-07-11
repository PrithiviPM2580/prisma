import prisma from "../prisma-client";

export const createCategory = async (name: string) => {
  const category = await prisma.category.create({
    data: {
      name,
    },
    select: {
      id: true,
      name: true,
    },
  });

  console.log(category);
  return category;
};
