# Folder Structure

```text
prisma-practice/

├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
│
├── src/
│
│   ├── generated/
│
│   ├── prisma/
│   │      client.js
│
│   ├── 01-create/
│   │      01-create-user.js
│   │      02-create-profile.js
│   │      03-create-post.js
│   │      04-create-comment.js
│   │      05-create-category.js
│   │      06-create-user-with-profile.js
│   │      07-create-user-with-posts.js
│   │      08-create-post-with-comments.js
│   │      09-create-category-with-posts.js
│   │      10-create-many-users.js
│
│   ├── 02-read/
│   │      01-findUnique.js
│   │      02-findFirst.js
│   │      03-findMany.js
│   │      04-select.js
│   │      05-include.js
│   │      06-orderBy.js
│   │      07-pagination.js
│
│   ├── 03-update/
│   │      01-update-user.js
│   │      02-update-post.js
│   │      03-updateMany.js
│   │      04-nested-update.js
│
│   ├── 04-delete/
│   │      01-delete-user.js
│   │      02-deleteMany.js
│   │      03-nested-delete.js
│
│   ├── 05-filtering/
│   │      equals.js
│   │      contains.js
│   │      startsWith.js
│   │      endsWith.js
│   │      in.js
│   │      notIn.js
│   │      AND.js
│   │      OR.js
│   │      NOT.js
│
│   ├── 06-relations/
│   │      connect.js
│   │      disconnect.js
│   │      connectOrCreate.js
│   │      nestedCreate.js
│   │      nestedUpdate.js
│   │      nestedDelete.js
│
│   ├── 07-aggregation/
│   │      count.js
│   │      avg.js
│   │      sum.js
│   │      min.js
│   │      max.js
│   │      groupBy.js
│
│   ├── 08-transactions/
│   │      transaction.js
│   │      batch.js
│
│   ├── 09-raw-sql/
│   │      queryRaw.js
│   │      executeRaw.js
│
│   └── index.js
```

---

# PART 1 — CREATE QUESTIONS

## 01-create-user.js

### Basic

1. Create one user.

2. Create a user named Ram.

3. Create a user with role ADMIN.

4. Create a user without phone.

5. Create a user without city.

---

### Intermediate

6. Create a user with every field.

7. Create five users using `createMany()`.

8. Insert duplicate emails and skip duplicates.

9. Create 100 fake users.

10. Create users with different roles.

---

### Advanced

11. Create a user and return only id and name.

12. Create a user and immediately include the profile.

13. Create a user with a profile.

14. Create a user with three posts.

15. Create a user with three posts and each post with two comments.

---

# 02-create-profile.js

1. Create a profile for an existing user.

2. Add GitHub URL.

3. Add website.

4. Create profile without bio.

5. Try creating two profiles for one user.

6. Explain why it fails.

7. Return profile with user.

8. Return only bio.

9. Create profile using nested create.

10. Update profile after creation.

---

# 03-create-post.js

1. Create one post.

2. Create a published post.

3. Create a draft.

4. Create an archived post.

5. Set views manually.

6. Use default views.

7. Return author.

8. Create five posts.

9. Create post with categories.

10. Create post with comments.

---

# 04-create-comment.js

1. Add comment.

2. Add comment to first post.

3. Add comment from second user.

4. Add five comments.

5. Create comment and include user.

6. Include post.

7. Include both.

8. Return only message.

9. Add comment using nested create.

10. Explain generated SQL.

---

# 05-create-category.js

1. Create Technology.

2. Create Prisma.

3. Create JavaScript.

4. Create Backend.

5. Create Database.

6. Add categories to posts.

7. Add one category to many posts.

8. Add many categories to one post.

9. Explain join table.

10. Fetch category with posts.

---

# READ QUESTIONS

## findUnique.js

1. Find user by id.

2. Find user by email.

3. Return only name.

4. Return only role.

5. Include profile.

6. Include posts.

7. Include comments.

8. Find category by name.

9. Find profile by userId.

10. Explain why email works but age doesn't.

---

## findFirst.js

1. First ADMIN.

2. First USER.

3. First published post.

4. First draft.

5. First archived.

6. First comment.

7. First user older than 18.

8. First user from Kathmandu.

9. Order by newest.

10. Explain difference from findUnique.

---

## findMany.js

1. All users.

2. All posts.

3. All comments.

4. All categories.

5. All admins.

6. Users older than 20.

7. Published posts.

8. Draft posts.

9. Archived posts.

10. Users from Pokhara.

11. Posts with more than 100 views.

12. Users with phone numbers.

13. Users without phone numbers.

14. Users without city.

15. Posts ordered by views.

---

# UPDATE QUESTIONS

## update-user.js

1. Update name.

2. Update city.

3. Update phone.

4. Update role.

5. Change email.

6. Remove phone.

7. Remove city.

8. Update multiple fields.

9. Update updatedAt automatically.

10. Return updated record.

---

## update-post.js

1. Publish draft.

2. Archive published.

3. Increase views.

4. Reset views.

5. Change title.

6. Change content.

7. Update status.

8. Update author.

9. Update categories.

10. Include comments.

---

# DELETE QUESTIONS

1. Delete comment.

2. Delete category.

3. Delete post.

4. Delete profile.

5. Delete user.

6. Observe cascade.

7. Delete all draft posts.

8. Delete all comments of one post.

9. Delete inactive categories.

10. Explain cascade.

---

# FILTERING QUESTIONS

## equals

1. role = ADMIN

2. city = Kathmandu

3. status = DRAFT

4. published = true

5. age = 20

---

## contains

1. name contains "an"

2. email contains gmail

3. title contains Prisma

4. content contains database

5. bio contains developer

---

## startsWith

1. email starts with a

2. title starts with Learn

3. city starts with K

4. github starts with https

5. website starts with https

---

## endsWith

1. gmail.com

2. github.com

3. .com

4. .dev

5. .io

---

## in

1. Users id in [1,2,3]

2. Role in ADMIN USER

3. Status in DRAFT PUBLISHED

4. Categories in list

5. Posts id list

---

## AND

1. Admin AND Kathmandu

2. Published AND >100 views

3. Draft AND author id 1

4. Age>20 AND role USER

5. City Kathmandu AND phone exists

---

## OR

1. ADMIN OR USER from Pokhara

2. Draft OR Published

3. Gmail OR Yahoo

4. Kathmandu OR Butwal

5. Views>100 OR published

---

## NOT

1. NOT ADMIN

2. NOT Published

3. NOT Draft

4. NOT Kathmandu

5. NOT gmail

---

# RELATION QUESTIONS

## One-to-One

1. Get user with profile.

2. Get profile with user.

3. Create profile with user.

4. Update profile.

5. Delete profile.

6. Replace profile.

7. Count profiles.

8. Find users without profile.

9. Find profiles without bio.

10. Explain why `userId` is unique.

---

## One-to-Many

1. User with posts.

2. User with comments.

3. Post with author.

4. Post with comments.

5. Comment with user.

6. Comment with post.

7. Create nested posts.

8. Update nested posts.

9. Delete nested posts.

10. Count posts per user.

---

## Many-to-Many

1. Add category to post.

2. Remove category.

3. Replace categories.

4. One post with three categories.

5. One category with ten posts.

6. Posts in Technology.

7. Categories of one post.

8. Count posts in each category.

9. Category with most posts.

10. Explain the implicit join table.

---

# AGGREGATION

1. Count users.

2. Count admins.

3. Count posts.

4. Average age.

5. Average views.

6. Sum views.

7. Maximum age.

8. Minimum age.

9. Group users by role.

10. Group posts by status.

11. Group comments by user.

12. Group posts by author.

13. Find author with most posts.

14. Find category with most posts.

15. Find average views per author.

---

# TRANSACTIONS

1. Create user and profile together.

2. Create post and comments together.

3. Create category and connect posts.

4. Update post and category.

5. Delete user and profile together.

6. Transfer post ownership between users.

7. Roll back if comment creation fails.

8. Bulk create users and profiles.

9. Bulk update post status.

10. Explain why transactions are important.

---

