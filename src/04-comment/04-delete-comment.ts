import prisma from "../prisma-client";

export const deleteComment = async (id: number) => {
  const comment = await prisma.comment.delete({
    where: {
      id,
    },
    select: {
      id: true,
      message: true,
    },
  });

  console.log(comment);
  return comment;
};
