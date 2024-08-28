import { UserRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
    constructor(private userRepository: UserRepository) {}

    async register (username: string, password: string, email: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await this.userRepository.createUser({
            username,
            password: hashedPassword,
            email})
    }

    async login (usermame: string, password: string) {
        const user = await this.userRepository.findByUserName(usermame);

        if (!user || !await bcrypt.compare(password, user.password)){
            throw new Error("Invalid username or password");
        }

        const token = jwt.sign({
            userId: user.id, isAdmin: user.isAdmin
        },
            process.env.JWT_SECRET!, {
            expiresIn: '1h'
        });

        return { token };

        }
}
