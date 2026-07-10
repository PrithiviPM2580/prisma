import prisma from "../prisma-client";

export const postFiltering = async () => {
  const post = await prisma.post.findMany({
    where: {
      status: "PUBLISHED",
      published: true,
      views: {
        gt: 100,
      },
    },
    select: {
      title: true,
      views: true,
      status: true,
      authorId: true,
    },
    orderBy: {
      views: "desc",
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  console.log(post);
  return post;
};
