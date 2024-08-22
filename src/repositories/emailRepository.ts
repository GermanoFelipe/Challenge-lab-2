import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const logEmail = async (data: any) => {
    return prisma.email.create({ data });
};

// Más funciones según sea necesario...
