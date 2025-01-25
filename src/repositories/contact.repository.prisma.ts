import {ContactInterface, ContactRepository, CreateContactDatabase} from "../interfaces/contact.interface";
import {prisma} from "../database/prisma-client";
import {simpleAuthMiddleware} from "../middleware/simple.auth.middleware";

export class ContactRepositoryPrisma implements ContactRepository {
    async create(data: CreateContactDatabase): Promise<ContactInterface> {
        return prisma.contacts.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                userId: data.userId
            }
        });
    }

    async findByEmailOrPhone(email: string, phone: string): Promise<ContactInterface | null> {
        const result = await prisma.contacts.findFirst({
            where: {
                OR: [
                    {email: email},
                    {phone: phone}
                ]
            }
        })
        return result || null
    }

    async findAllContacts(id: string): Promise<ContactInterface[]> {
        return prisma.contacts.findMany({
            where: {
                userId: id
            }
        })
    }

    async update({id, phone, name, email}: ContactInterface): Promise<ContactInterface> {
        return prisma.contacts.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email,
                phone: phone
            }
        })
    }

    async delete(id: string): Promise<boolean> {
        const result = await prisma.contacts.delete({
            where: {
                id: id
            }
        })
        return !!result
    }

}