import prisma from "../prisma-client";

export const deleteCategory = async (id: number) => {
  const category = await prisma.category.delete({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
    },
  });

  console.log(category);
  return category;
};
