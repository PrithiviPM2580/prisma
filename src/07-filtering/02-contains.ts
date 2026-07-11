import prisma from "../prisma-client";

export const contains = async (name: string) => {
  const post = await prisma.post.findMany({
    where: {
      title: {
        contains: name,
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      title: true,
      published: true,
    },
  });

  if (!post) throw new Error("Post not found");

  console.log(post);
  return post;
};
