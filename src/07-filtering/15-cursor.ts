import prisma from "../prisma-client";

export const cursor = async () => {
  const posts = await prisma.post.findMany({
    cursor: {
      id: 5,
    },
    skip: 1,
    take: 5,
  });

  if (!posts) throw new Error("Posts not found");

  console.log(posts);
  return posts;
};
