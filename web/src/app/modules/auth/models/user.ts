export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    activationToken?: string;
    accessToken?: string;

    constructor(user: any) {
        Object.assign(this, user);
    }
}