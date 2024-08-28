import prisma from '../prisma/prismaClient';
import { Email } from '@prisma/client';

export class EmailRepository {
    async createEmail (emailData: {recipient: string,
        subject: string,
        body: string,
        userId: number}) : Promise<Email> {

        return prisma.email.create({ data: emailData })
    }

    async countEmailsSentToday (userId: number): Promise<number> {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return prisma.email.count ({
            where : {
                userId,
                sentAt: {
                    gte: today
                }
            }
        })
    }
}
