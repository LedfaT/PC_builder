import UserCreateIn from "@models/in/userCreateIn";

export interface IUserOut {
  accessToken: string;
  refreshToken: string;
  user: UserCreateIn;
}
