import prisma from "../prisma-client";

export const take = async (take: number) => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take,
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
  });

  if (!posts) throw new Error("Posts not found");

  console.log(posts);
  return posts;
};
