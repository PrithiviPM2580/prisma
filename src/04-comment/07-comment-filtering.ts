import prisma from "../prisma-client";

const getFullYear = new Date(new Date().getFullYear(), 0, 1);

export const commentFiltering = async (name: string) => {
  const comments = await prisma.comment.findMany({
    where: {
      message: {
        contains: name,
        mode: "insensitive",
      },
      createdAt: {
        gte: getFullYear,
      },
      user: {
        role: "ADMIN",
      },
    },
    select: {
      id: true,
      message: true,
      user: {
        select: {
          name: true,
        },
      },
      post: {
        select: {
          title: true,
        },
      },
    },
  });

  if (!comments) {
    throw new Error("Comment not found.");
  }

  console.log(comments);
  return comments;
};
