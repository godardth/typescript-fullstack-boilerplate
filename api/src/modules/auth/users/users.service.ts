import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { randomBytes } from 'crypto';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.activationToken = randomBytes(64).toString('hex');
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return this.userRepository.findOneBy({id: id});
  }

  async findOneByEmail(email: string) {
    return this.userRepository.findOneBy({email: email});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.save(updateUserDto);
  }

  async remove(id: number) {
    let obj = await this.userRepository.findOneBy({id: id});
    return this.userRepository.remove(obj);
  }

}
