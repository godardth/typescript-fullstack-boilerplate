import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class User {

    constructor(user: any) {
        Object.assign(this, user);
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Exclude()
    @Column({ nullable: true })
    activationToken: string;

    accessToken: string;

    @Expose()
    get isActivated(): boolean {
        return !this.activationToken;
    }

}

