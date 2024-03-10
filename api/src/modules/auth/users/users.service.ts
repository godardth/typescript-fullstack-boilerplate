import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createCatDto: CreateUserDto) {
    return this.userRepository.save(createCatDto);
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

  async update(id: number, updateCatDto: UpdateUserDto) {
    return this.userRepository.save(updateCatDto);
  }

  async remove(id: number) {
    let obj = await this.userRepository.findOneBy({id: id});
    return this.userRepository.remove(obj);
  }

}
