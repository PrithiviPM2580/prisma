import prisma from "../prisma-client";

export const createUser = async () => {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "USER",
      age: 21,
      phone: "9183452765",
      city: "Banbatica",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
  console.log(user);
  return user;
};
