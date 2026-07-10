import prisma from "../prisma-client";

export const userComments = async (id: number) => {
  const comments = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      comments: {
        select: {
          id: true,
          message: true,
          createdAt: true,
        },
      },
    },
  });

  if (!comments) {
    throw new Error("Comment not found");
  }

  console.log(comments);
  return comments;
};
