import prisma from "../prisma-client";

export const avg = async () => {
  const post = await prisma.post.aggregate({
    _avg: {
      views: true,
    },
  });

  if (!post) throw new Error("Post not found");

  console.log(post);
  return post;
};
