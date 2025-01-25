export interface ContactInterface {
    id: string
    name: string
    email: string
    phone: string
    userId?: string
}

export interface CreateContact {
    name: string
    email: string
    phone: string
    userEmail: string
}

export interface CreateContactDatabase {
    name: string
    email: string
    phone: string
    userId: string
}

export interface ContactRepository {
    create(data: CreateContactDatabase): Promise<ContactInterface>
    findByEmailOrPhone(email: string, phone: string): Promise<ContactInterface | null>
    findAllContacts(id: string): Promise<ContactInterface[]>
    update({id, phone, name, email}: ContactInterface): Promise<ContactInterface>
    delete(id: string): Promise<boolean>
}