import prisma from "../prisma-client";

export const findPost = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      content: true,
      status: true,
      views: true,
      createdAt: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  console.log(post);
  return post;
};
