import prisma from "../prisma-client";
import type { Post } from "../generated/prisma/client";

type CreatePost = Pick<Post, "title" | "content" | "status">;

export const createPost = async (authorId: number, data: CreatePost) => {
  const post = await prisma.post.create({
    data: {
      ...data,
      authorId,
    },
    select: {
      id: true,
      title: true,
      status: true,
      views: true,
      published: true,
      authorId: true,
    },
  });

  console.log(post);
  return post;
};
