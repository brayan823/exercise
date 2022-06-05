import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';
import { Tea } from './entities/tea.entity';

@Injectable()
export class TeaService {
  constructor(
    @InjectRepository(Tea)
    private teaRepo: Repository<Tea>,
  ) {}

  async findAll(): Promise<Tea[]> {
    return await this.teaRepo.find();
  }

  async create(createTeaDto: CreateTeaDto): Promise<Tea> {
    const tea = this.teaRepo.create(createTeaDto);
    return await this.teaRepo.save(tea);
  }

  async findOne(id: string): Promise<Tea> {
    return await this.teaRepo.findOne(id);
  }

  async update(id: string, updateTeaDto: UpdateTeaDto): Promise<Tea> {
    const tea = await this.teaRepo.preload({
      id: id,
      ...updateTeaDto,
    });
    if (!tea) {
      throw new NotFoundException(`Tea ${id} not found`);
    }
    return await this.teaRepo.save(tea);
  }

  async remove(id: string) {
    const tea = await this.findOne(id);

    if (!tea) {
      throw new NotFoundException(`Tea ${id} not found`);
    }

    return await this.teaRepo.remove(tea);
  }
}
