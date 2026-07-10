import prisma from "../prisma-client";
import type { Post } from "../generated/prisma/client";

type UpdatePost = Pick<Post, "title" | "status" | "published" | "views">;

export const updatePost = async (id: number, data: UpdatePost) => {
  const post = await prisma.post.update({
    where: {
      id,
    },
    data: data,
    select: {
      title: true,
      status: true,
      views: true,
      published: true,
      updatedAt: true,
    },
  });

  console.log(post);
  return post;
};
