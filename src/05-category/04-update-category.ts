import prisma from "../prisma-client";

export const updateCategory = async (id: number, name: string) => {
  const category = await prisma.category.update({
    where: {
      id,
    },
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
