import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { UserRepository } from '../repositories/userRepository';

const authService = new AuthService(new UserRepository());

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const { username, password, email } = req.body;
            const user = await authService.register(username, password, email);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const result = await authService.login(username, password);
            res.json(result);
        } catch (error) {
            res.status(401).json({ message: error });
        }
    }
}
