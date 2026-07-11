import prisma from "../prisma-client";

interface Post {
  title: string;
  content: string;
}
interface CategoryIds {
  id1: number;
  id2: number;
}

export const connect = async (
  postData: Post,
  authorId: number,
  categoryIds: CategoryIds,
) => {
  const postConnect = await prisma.post.create({
    data: {
      title: postData.title,
      content: postData.content,
      author: {
        connect: {
          id: authorId,
        },
      },
      categories: {
        connect: [
          {
            id: categoryIds.id1,
          },
          {
            id: categoryIds.id2,
          },
        ],
      },
    },
    select: {
      title: true,
      authorId: true,
      categories: {
        select: {
          id: true,
        },
      },
    },
  });

  console.log(JSON.stringify(postConnect, null, 2));
  return connect;
};
