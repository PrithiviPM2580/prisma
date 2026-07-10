import prisma from "../prisma-client";

export const postComments = async (id: number) => {
  const comments = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      comments: {
        orderBy: {
          createdAt: "asc",
        },
        select: {
          message: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!comments) {
    throw new Error("Comments not found");
  }

  console.log(JSON.stringify(comments, null, 2));
  return comments;
};
