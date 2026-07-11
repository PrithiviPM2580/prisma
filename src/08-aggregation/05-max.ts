import prisma from "../prisma-client";

export const max = async () => {
  const post = await prisma.post.aggregate({
    _max: {
      views: true,
    },
  });

  if (!post) throw new Error("Post not found");

  console.log(post);
  return post;
};
