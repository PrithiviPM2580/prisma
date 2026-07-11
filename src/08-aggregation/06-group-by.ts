import prisma from "../prisma-client";

export const groupBy = async () => {
  const [group1, group2] = await Promise.all([
    prisma.user.groupBy({
      by: ["role"],
      _count: {
        _all: true,
      },
    }),
    prisma.user.groupBy({
      where: {
        role: "USER",
      },
      by: "role",
      _count: {
        _all: true,
      },
    }),
  ]);

  console.log(group1, group2);
  return [group1, group2];
};
