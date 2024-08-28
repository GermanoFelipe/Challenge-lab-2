import prisma from '../prisma/prismaClient';
import { User } from '@prisma/client'


export class UserRepository {
    async findByUserName (username: string): Promise<User | null> {
        return prisma.user.findUnique( { where: { username } } )
    }

    async createUser (userData: { username: string, password: string, email: string }): Promise<User> {
        return prisma.user.create({ data: userData })
    }
}