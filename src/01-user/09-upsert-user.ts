import prisma from "../prisma-client";
import type { User } from "../generated/prisma/client";

type CreateUser = Omit<User, "id" | "createdAt" | "updatedAt" | "phone">;

export const upsertUser = async (email: string, data: CreateUser) => {
  const user = await prisma.user.upsert({
    where: {
      email,
    },
    update: {
      city: "Pokhara",
    },
    create: data,
    select: {
      id: true,
      name: true,
      email: true,
      city: true,
    },
  });

  console.log(user);
  return user;
};
