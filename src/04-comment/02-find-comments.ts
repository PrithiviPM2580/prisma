import prisma from "../prisma-client";

export const findComments = async (postId: number) => {
  const comment = await prisma.comment.findMany({
    where: {
      postId,
    },
    select: {
      message: true,
      createdAt: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!comment) {
    throw new Error("Comment not found.");
  }

  console.log(comment);
  return comment;
};
