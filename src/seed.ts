import { Role, PostStatus } from "./generated/prisma/enums";
import prisma from "./prisma-client";

async function main() {
  console.log("🌱 Seeding...");

  // Delete in dependency order
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // -------------------------
  // Categories
  // -------------------------

  const categoryNames = [
    "Technology",
    "Programming",
    "Backend",
    "Frontend",
    "Database",
    "DevOps",
    "AI",
    "Mobile",
  ];

  const categories = [];

  for (const name of categoryNames) {
    const category = await prisma.category.create({
      data: { name },
    });

    categories.push(category);
  }

  // -------------------------
  // Users
  // -------------------------

  const users = [];

  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
        age: 20 + i,
        phone: `98000000${String(i).padStart(2, "0")}`,
        city: ["Kathmandu", "Pokhara", "Butwal", "Biratnagar", "Nepalgunj"][
          i % 5
        ],
        role: i === 1 ? Role.ADMIN : Role.USER,
      },
    });

    users.push(user);

    await prisma.profile.create({
      data: {
        userId: user.id,
        bio: `Hi! I'm ${user.name}.`,
        website: `https://user${i}.com`,
        github: `user${i}`,
      },
    });
  }

  // -------------------------
  // Posts
  // -------------------------

  const posts = [];

  for (let i = 1; i <= 20; i++) {
    const post = await prisma.post.create({
      data: {
        title: `Post ${i}`,
        content: `This is the content of post ${i}.`,
        views: Math.floor(Math.random() * 5000),
        published: i % 2 === 0,
        status:
          i % 3 === 0
            ? PostStatus.PUBLISHED
            : i % 3 === 1
              ? PostStatus.DRAFT
              : PostStatus.ARCHIVED,
        authorId: users[(i - 1) % users.length]!.id,
      },
    });

    posts.push(post);

    // connect categories
    await prisma.post.update({
      where: {
        id: post.id,
      },
      data: {
        categories: {
          connect: [
            {
              id: categories[i % categories.length]!.id,
            },
            {
              id: categories[(i + 1) % categories.length]!.id,
            },
          ],
        },
      },
    });
  }

  // -------------------------
  // Comments
  // -------------------------

  const messages = [
    "Great article!",
    "Very helpful.",
    "Amazing explanation.",
    "Thanks for sharing.",
    "Loved it!",
    "Awesome work.",
    "Really informative.",
    "Keep posting.",
    "Fantastic.",
    "This helped me a lot.",
  ];

  for (let i = 1; i <= 50; i++) {
    await prisma.comment.create({
      data: {
        message: messages[i % messages.length]!,
        userId: users[(i - 1) % users.length]!.id,
        postId: posts[(i - 1) % posts.length]!.id,
      },
    });
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
