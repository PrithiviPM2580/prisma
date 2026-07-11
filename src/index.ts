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
import { findPost } from "./03-post/03-find-post";
import { updatePost } from "./03-post/04-update-post";
import { deletePost } from "./03-post/05-delete-post";
import { postFiltering } from "./03-post/06-post-filtering";
import { postPagination } from "./03-post/07-post-pagination";
import { postOrdering } from "./03-post/08-post-ordering";

/*********************************
 *        Comment                 *
 *********************************/
import { createComment } from "./04-comment/01-create-comment";
import { findComments } from "./04-comment/02-find-comments";
import { updateComment } from "./04-comment/03-update-comment";
import { deleteComment } from "./04-comment/04-delete-comment";
import { userComments } from "./04-comment/05-user-comments";
import { postComments } from "./04-comment/06-post-comments";
import { commentFiltering } from "./04-comment/07-comment-filtering";
import { commentPagination } from "./04-comment/08-comment-pagination";
import { commentOrdering } from "./04-comment/09-comment-ordering";

/*********************************
 *        Category                *
 *********************************/
import { createCategory } from "./05-category/01-create-category";
import { findCategory } from "./05-category/02-find-category";
import { findAllCategory } from "./05-category/03-find-all-category";
import { updateCategory } from "./05-category/04-update-category";
import { deleteCategory } from "./05-category/05-delete-category";
import { categoryPosts } from "./05-category/06-category-posts";
import { postCategories } from "./05-category/07-post-categories";
import { categoryFiltering } from "./05-category/08-category-filtering";
import { categoryPagination } from "./05-category/09-category-pagination";
import { categoryOrdering } from "./05-category/10-category-ordering";

/*********************************
 *        Relations               *
 *********************************/
import { userProfile } from "./06-relations/01-user-profile";
import { userPosts } from "./06-relations/02-user-posts";
import { postComments as postCommentsRelation } from "./06-relations/03-post-comments";
import { postCategories as postCategoriesRelation } from "./06-relations/04-post-categories";
import { nestedCreate } from "./06-relations/05-nested-create";
import { connect } from "./06-relations/06-connect";
import { disconnect } from "./06-relations/07-disconnect";
import { connectOrCreate } from "./06-relations/08-connect-or-create";

/*********************************
 *        Filtering               *
 *********************************/
import { equals } from "./07-filtering/01-equals";
import { contains } from "./07-filtering/02-contains";
import { startsWith } from "./07-filtering/03-starts-with";
import { endsWith } from "./07-filtering/04-ends-with";
import { inFilter } from "./07-filtering/05-in";
import { notIn } from "./07-filtering/06-notIn";
import { and } from "./07-filtering/07-and";
import { or } from "./07-filtering/08-or";
import { not } from "./07-filtering/09-not";
import { select } from "./07-filtering/10-select";
import { include } from "./07-filtering/11-include";
import { orderBy } from "./07-filtering/12-order-by";
import { take } from "./07-filtering/13-take";
import { skip } from "./07-filtering/14-skip";
import { cursor } from "./07-filtering/15-cursor";

/*********************************
 *        Aggregation             *
 *********************************/
import { count } from "./08-aggregation/01-count";
import { avg } from "./08-aggregation/02-avg";
import { sum } from "./08-aggregation/03-sum";
import { min } from "./08-aggregation/04-min";
import { max } from "./08-aggregation/05-max";
import { groupBy } from "./08-aggregation/06-group-by";

/*********************************
 *        Transcation             *
 *********************************/
import { basicTranscation } from "./09-transcations/01-basic-transcation";
import { rollback } from "./09-transcations/02-rollback";

rollback(
  {
    name: "hari",
    email: "hari@gmail.com",
    age: 21,
  },
  "Frontend Developer",
);
