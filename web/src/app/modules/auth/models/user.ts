export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    isActivated?: boolean;
    accessToken?: string;

    constructor(user: any) {
        Object.assign(this, user);
    }
}