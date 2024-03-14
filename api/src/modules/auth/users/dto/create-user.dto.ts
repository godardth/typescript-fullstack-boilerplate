export class CreateUserDto {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    activationToken: string;
}
