import prisma from "../prisma-client";

export const sum = async () => {
  const post = await prisma.post.aggregate({
    _sum: {
      views: true,
    },
  });

  if (!post) throw new Error("Post not found");

  console.log(post);
  return post;
};
