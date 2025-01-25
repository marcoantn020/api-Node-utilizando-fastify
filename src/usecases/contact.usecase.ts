import {ContactRepositoryPrisma} from "../repositories/contact.repository.prisma";
import {ContactInterface, ContactRepository, CreateContact} from "../interfaces/contact.interface";
import {UserRepository} from "../interfaces/user.interface";
import {UserRepositoryPrisma} from "../repositories/user.repository.prima";

export class ContactUseCase {
    private contactRepository: ContactRepository;
    private userRepository: UserRepository;

    constructor() {
        this.contactRepository = new ContactRepositoryPrisma();
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({name, email, phone, userEmail}: CreateContact): Promise<ContactInterface> {
        const user = await this.userRepository.findByEmail(userEmail)
        if (!user) {
            throw new Error('User not found')
        }

        const verifyIfExistsContact = await this.contactRepository.findByEmailOrPhone(email, phone)
        if (verifyIfExistsContact) {
            throw new Error('Contact already exist')
        }

        return await this.contactRepository.create({
            name,
            email,
            phone,
            userId: user.id
        })
    }

    async listAllContacts(userEmail: string) {
        const user = await this.userRepository.findByEmail(userEmail)
        if (!user) {
            throw new Error('User not found')
        }
        return await this.contactRepository.findAllContacts(user.id)
    }

    async update({id, phone, name, email}: ContactInterface) {
        return await this.contactRepository.update({
            id,
            name,
            email,
            phone
        })
    }

    async delete(id: string) {
        return this.contactRepository.delete(id)
    }
}