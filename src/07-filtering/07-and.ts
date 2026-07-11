import prisma from "../prisma-client";

export const and = async (name: string) => {
  const posts = await prisma.post.findMany({
    where: {
      AND: [
        {
          published: true,
        },
        {
          title: {
            contains: name,
            mode: "insensitive",
          },
        },
      ],
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
