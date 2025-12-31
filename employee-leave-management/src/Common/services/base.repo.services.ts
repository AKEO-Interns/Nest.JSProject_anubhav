import { Repository, ObjectLiteral, DeepPartial } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class BaseService<T extends ObjectLiteral> {
  constructor(protected readonly repo: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<T> {
    const entity = await this.repo.findOne({ where: { id } as any });
    if (!entity) throw new NotFoundException('Entity not found');
    return entity;
  }

  async create(dto: DeepPartial<T>): Promise<T> {
    const entity = this.repo.create(dto); // <- let TS infer type
    return await this.repo.save(entity);  // TS infers Promise<T>
  }

  async update(id: number, dto: DeepPartial<T>): Promise<T> {
    const entity = await this.findOne(id);
    Object.assign(entity, dto);
    return await this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
  }
}
