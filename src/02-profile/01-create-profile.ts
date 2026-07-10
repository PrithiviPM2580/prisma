import prisma from "../prisma-client";
import type { Profile } from "../generated/prisma/client";

type CreateProfile = Omit<Profile, "id" | "userId">;

export const createProfile = async (id: number, data: CreateProfile) => {
  const profile = await prisma.profile.findUnique({
    where: {
      id,
    },
  });

  if (profile) {
    throw new Error("User already has a profile.");
  }

  const newProfile = await prisma.profile.create({
    data: {
      ...data,
      userId: id,
    },
    select: {
      id: true,
      bio: true,
      website: true,
      userId: true,
    },
  });

  console.log(newProfile);
  return newProfile;
};
