import { PrismaClient, Prisma } from "@prisma/client";

const client = new PrismaClient();

// export type User = Prisma.UserGetPayload<{}>;
// export type Token = Prisma.TokenGetPayload<{}>;

export default client;
