/*********************************
 *        User                   *
 *********************************/
import { createUser } from "./01-user/01-create-user";
import { createManyUsers } from "./01-user/02-create-many-users";
import { findUserById } from "./01-user/03-find-user-by-id";
import { findUserByEmail } from "./01-user/04-find-user-by-email";
import { findAllUsers } from "./01-user/05-find-all-users";
import { updateUserName } from "./01-user/06-update-user-name";
import { updateUserRole } from "./01-user/07-update-user-role";
import { deleteUser } from "./01-user/08-delete-user";
import { upsertUser } from "./01-user/09-upsert-user";
import { userFiltering } from "./01-user/10-user-filtering";

/*********************************
 *        Profile                 *
 *********************************/
import { createProfile } from "./02-profile/01-create-profile";
import { findProfile } from "./02-profile/02-find-profile";
import { updateProfile } from "./02-profile/03-update-profile";
import { deleteProfile } from "./02-profile/04-delete-profile";
import { userWithProfile } from "./02-profile/05-user-with-profile";

/*********************************
 *        Post                    *
 *********************************/
import { createPost } from "./03-post/01-create-post";
import { createManyPosts } from "./03-post/02-create-many-posts";

createManyPosts([
  // Draft (5)
  {
    title: "Introduction to Prisma",
    content: "Learn the basics of Prisma ORM.",
    status: "DRAFT",
    authorId: 1,
  },
  {
    title: "Node.js Best Practices",
    content: "Tips for writing clean Node.js applications.",
    status: "DRAFT",
    authorId: 2,
  },
  {
    title: "Understanding PostgreSQL",
    content: "An introduction to PostgreSQL databases.",
    status: "DRAFT",
    authorId: 3,
  },
  {
    title: "TypeScript Essentials",
    content: "A beginner's guide to TypeScript.",
    status: "DRAFT",
    authorId: 1,
  },
  {
    title: "REST API Design",
    content: "How to design scalable REST APIs.",
    status: "DRAFT",
    authorId: 2,
  },

  // Published (3)
  {
    title: "Getting Started with Express",
    content: "Build your first Express server.",
    status: "PUBLISHED",
    authorId: 3,
  },
  {
    title: "Prisma Relationships",
    content: "Working with one-to-one and one-to-many relations.",
    status: "PUBLISHED",
    authorId: 1,
  },
  {
    title: "Authentication with JWT",
    content: "Secure your API using JSON Web Tokens.",
    status: "PUBLISHED",
    authorId: 2,
  },

  // Archived (2)
  {
    title: "Legacy JavaScript Patterns",
    content: "Older JavaScript patterns before ES6.",
    status: "ARCHIVED",
    authorId: 3,
  },
  {
    title: "Old Database Techniques",
    content: "Historical approaches to database management.",
    status: "ARCHIVED",
    authorId: 1,
  },
]);
