/*********************************
 *        User                   *                             *
 *********************************/
import { createUser } from "./01-user/01-create-user";
import { createManyUsers } from "./01-user/02-create-many-users";
import { findUserById } from "./01-user/03-find-user-by-id";
import { findUserByEmail } from "./01-user/04-find-user-by-email";
import { findAllUsers } from "./01-user/05-find-all-users";
import { updateUserName } from "./01-user/06-update-user-name";

updateUserName(5, "John Smith");
