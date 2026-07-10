import prisma from "../prisma-client";

export const createComment = async (
  userId: number,
  postId: number,
  message: string,
) => {
  const comment = await prisma.comment.create({
    data: {
      message,
      userId,
      postId,
    },
    select: {
      id: true,
      message: true,
      userId: true,
      postId: true,
      createdAt: true,
    },
  });

  console.log(comment);
  return comment;
};
