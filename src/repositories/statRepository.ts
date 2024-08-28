import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const incrementEmailCount = async (userId: number) => {
    return prisma.stat.updateMany({
        where: { userId, date: new Date() },
        data: { emailsSent: { increment: 1 } },
    });
};

export const getStatsForToday = async () => {
    return prisma.stat.findMany({
        where: { date: new Date() },
        include: { user: true },
    });
};