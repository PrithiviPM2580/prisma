import prisma from "../prisma-client";

export const not = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: {
        not: true,
      },
    },
    select: {
      id: true,
      title: true,
      published: true,
    },
  });

  if (!posts) throw new Error("Posts not found");

  console.log(posts);
  return posts;
};
