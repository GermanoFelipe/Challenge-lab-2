import { Request, Response } from 'express';
import { EmailService } from '../services/emailService';
import { EmailRepository } from '../repositories/emailRepository';

const emailService = new EmailService(new EmailRepository());

export class EmailController {
    async sendEmail(req: Request, res: Response) {
        try {
            const { recipient, subject, body } = req.body;
            const userId = req.body.userId;
            const email = await emailService.sendEmail(userId, recipient, subject, body);
            res.status(201).json(email);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }
}

