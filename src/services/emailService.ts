import { EmailRepository } from '../repositories/emailRepository';

export class EmailService {
    constructor(private emailRepository: EmailRepository) {}

    async sendEmail(userId: number, recipient: string, subject: string, body: string) {
        const emailsSentToday = await this.emailRepository.countEmailsSentToday(userId);

        if (emailsSentToday >= 1000) {
            throw new Error('Daily email limit exceeded');
        }

        return await this.emailRepository.createEmail({ recipient, subject, body, userId });
    }

}

