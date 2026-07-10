import prisma from "../prisma-client";

export const findProfile = async (id: number) => {
  const profile = await prisma.profile.findUnique({
    where: {
      id,
    },
    select: {
      bio: true,
      website: true,
      github: true,
    },
  });

  if (!profile) {
    throw new Error("Profile not found.");
  }

  console.log(profile);
  return profile;
};
