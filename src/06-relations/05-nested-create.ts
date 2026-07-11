import prisma from "../prisma-client";

interface UserData {
  name: string;
  email: string;
  age: number;
}

interface PostData {
  title: string;
  content: string;
}

export const nestedCreate = async (
  userData: UserData,
  bio: string,
  postData: PostData,
) => {
  const nested = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      age: userData.age,
      profile: {
        create: {
          bio,
        },
      },
      posts: {
        create: {
          title: postData.title,
          content: postData.content,
        },
      },
    },
    select: {
      name: true,
      profile: {
        select: {
          bio: true,
        },
      },
      posts: {
        select: {
          title: true,
        },
      },
    },
  });

  console.log(JSON.stringify(nested, null, 2));
  return nested;
};
