import prisma from "../prisma-client";

export const disconnect = async (postId: number, categoryId: number) => {
  const disconnectPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      categories: {
        disconnect: {
          id: categoryId,
        },
      },
    },
  });

  console.log(disconnectPost);
  return disconnect;
};
