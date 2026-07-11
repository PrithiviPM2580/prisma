import prisma from "../prisma-client";

export const postCategories = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!post) throw new Error("Post not found");

  console.log(post);
  return post;
};
