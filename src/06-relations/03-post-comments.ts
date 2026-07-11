import prisma from "../prisma-client";

export const postComments = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      comments: {
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

  if (!post) throw new Error("Post not found");

  console.log(JSON.stringify(post, null, 2));
  return post;
};
