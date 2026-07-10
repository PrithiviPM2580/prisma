import prisma from "../prisma-client";

export const updateComment = async (id: number, message: string) => {
  const comment = await prisma.comment.update({
    where: {
      id,
    },
    data: {
      message,
    },
    select: {
      id: true,
      message: true,
      createdAt: true,
    },
  });

  console.log(comment);
  return comment;
};
