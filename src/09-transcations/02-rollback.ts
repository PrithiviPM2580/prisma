import prisma from "../prisma-client";

interface CreateUser {
  name: string;
  email: string;
  age: number;
}

export const rollback = async (userData: CreateUser, bio: string) => {
  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        age: userData.age,
      },
    });

    const profile = await tx.profile.create({
      data: {
        bio,
        userId: user.id,
      },
    });

    throw new Error("Error happens");

    return {
      user,
      profile,
    };
  });

  console.log(result);
  return result;
};
