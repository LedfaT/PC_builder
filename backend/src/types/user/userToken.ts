export type UserToken = {
  id: string;
  email: string;
  isActivated: boolean;
  activationLink: string;
  role: string;
  createdAt: Date;
};
