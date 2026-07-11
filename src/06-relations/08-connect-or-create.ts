import prisma from "../prisma-client";

export const connectOrCreate = async (
  title: string,
  content: string,
  name: string,
  authorId: number,
) => {
  const create = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        connect: {
          id: authorId,
        },
      },
      categories: {
        connectOrCreate: {
          where: {
            name,
          },
          create: {
            name,
          },
        },
      },
    },
  });

  console.log(create);
  return create;
};
