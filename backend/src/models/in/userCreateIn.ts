import { UserRole } from "@prisma/client";
import { User } from "@prisma/client";

export default class UserCreateIn {
  id: number;
  email: string;
  username: string;
  password: string;
  user_role: UserRole;
  isActivated: boolean;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.username = user.username;
    this.user_role = user.user_role || "USER";
    this.isActivated = user.isActivated || false;
  }
}
