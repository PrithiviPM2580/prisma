import { Role } from "../generated/prisma/enums";
import prisma from "../prisma-client";

export const createManyUsers = async () => {
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        age: 28,
        city: "Kathmandu",
        role: Role.ADMIN,
      },
      {
        name: "Sita Thapa",
        email: "sita.thapa@example.com",
        age: 32,
        city: "Pokhara",
        role: Role.ADMIN,
      },
      {
        name: "Rohan Adhikari",
        email: "rohan.adhikari@example.com",
        age: 24,
        city: "Butwal",
        role: Role.USER,
      },
      {
        name: "Anisha Karki",
        email: "anisha.karki@example.com",
        age: 22,
        city: "Chitwan",
        role: Role.USER,
      },
      {
        name: "Bibek Gautam",
        email: "bibek.gautam@example.com",
        age: 30,
        city: "Biratnagar",
        role: Role.USER,
      },
      {
        name: "Prabesh Rai",
        email: "prabesh.rai@example.com",
        age: 26,
        city: "Dharan",
        role: Role.USER,
      },
      {
        name: "Nisha Shrestha",
        email: "nisha.shrestha@example.com",
        age: 27,
        city: "Lalitpur",
        role: Role.USER,
      },
      {
        name: "Suman Maharjan",
        email: "suman.maharjan@example.com",
        age: 29,
        city: "Bhaktapur",
        role: Role.USER,
      },
      {
        name: "Kiran Joshi",
        email: "kiran.joshi@example.com",
        age: 25,
        city: "Kathmandu",
        role: Role.USER,
      },
      {
        name: "Manisha Poudel",
        email: "manisha.poudel@example.com",
        age: 23,
        city: "Pokhara",
        role: Role.USER,
      },
    ],
    skipDuplicates: true,
  });
  console.log(users);
  return users;
};
