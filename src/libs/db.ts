import { PrismaClient } from "@prisma/client"; 

const prismaClientSingleton = (() => {
    return new PrismaClient();
});

const globalFroPrisma = globalThis;

const prisma = globalFroPrisma.prisma ?? prismaClientSingleton();;

if (process.env.NODE_ENV !== "production") {
    globalFroPrisma.prisma = prisma;
}

export default prisma;