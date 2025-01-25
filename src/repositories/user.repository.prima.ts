import {UserCreate, UserInterface, UserRepository} from "../interfaces/user.interface";
import {prisma} from "../database/prisma-client";

class UserRepositoryPrisma implements UserRepository{
    async create(data: UserCreate): Promise<UserInterface> {
        return prisma.user.create({
            data: {
                name: data.name,
                email: data.email
            }
        })
    }

    async findByEmail(email: string): Promise<UserInterface | null> {
        const result = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        return result || null;
    }

}

export {UserRepositoryPrisma}