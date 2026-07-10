import prisma from "../prisma-client";

export const deleteProfile = async (userId: number) => {
  const profile = await prisma.profile.delete({
    where: {
      userId,
    },
    select: {
      id: true,
      bio: true,
    },
  });

  console.log(profile);
  return profile;
};
