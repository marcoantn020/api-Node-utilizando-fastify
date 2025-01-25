export interface UserInterface {
    id: string
    email: string
    name: string
}

export interface UserCreate {
    name: string
    email: string
}

export interface UserRepository {
    create(data: UserCreate): Promise<UserInterface>
    findByEmail(email: string): Promise<UserInterface | null>
}