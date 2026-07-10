import prisma from "../prisma-client";
import type { Post } from "../generated/prisma/client";

type CreateManyPosts = Pick<Post, "title" | "content" | "status" | "authorId">;

export const createManyPosts = async (data: CreateManyPosts[]) => {
  const posts = await prisma.post.createMany({
    data: data,
    skipDuplicates: true,
  });

  console.log(posts);
  return posts;
};
