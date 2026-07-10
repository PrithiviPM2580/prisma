import prisma from "../prisma-client";
import type { Profile } from "../generated/prisma/client";

type UpdateProfile = Pick<Profile, "bio" | "github">;

export const updateProfile = async (profileId: number, data: UpdateProfile) => {
  const profile = await prisma.profile.update({
    where: {
      id: profileId,
    },
    data: data,
  });

  console.log(profile);
  return profile;
};
