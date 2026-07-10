import prisma from "../prisma-client";

export const deletePost = async (id: number) => {
  const post = await prisma.post.delete({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
    },
  });

  console.log(post);
  return post;
};
