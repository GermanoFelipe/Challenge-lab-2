import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (data: any) => {
    return prisma.user.create({ data });
};

export const findUserByUsername = async (username: string) => {
    return prisma.user.findUnique({ where: { username } });
};

export class incrementEmailCount{} async (userId: number) => {
    return prisma.user.update({
        where: { id: userId },
        data: {

        }
    });
}