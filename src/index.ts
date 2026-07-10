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

updateProfile(12, {
  bio: "Senior Backend Engineer",
  github: "github.com/newusername",
});
