import {UserRepositoryPrisma} from "../repositories/user.repository.prima";
import {UserCreate, UserInterface, UserRepository} from "../interfaces/user.interface";

export class UseUseCase {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({name, email}: UserCreate): Promise<UserInterface> {
        const verifyIfUserExists = await this.userRepository.findByEmail(email)
        if (verifyIfUserExists) {
            throw new Error('User already exists.')
        }
        return await this.userRepository.create({name, email});
    }

}