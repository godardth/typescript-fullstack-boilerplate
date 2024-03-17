import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {

  constructor(
    @Inject('CAT_REPOSITORY')
    private catRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    return this.catRepository.save(createCatDto);
  }

  async findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  async findOne(id: number) {
    return this.catRepository.findOneBy({id: id});
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return this.catRepository.save(updateCatDto);
  }

  async remove(id: number) {
    let obj = await this.catRepository.findOneBy({id: id});
    return this.catRepository.remove(obj);
  }

}
