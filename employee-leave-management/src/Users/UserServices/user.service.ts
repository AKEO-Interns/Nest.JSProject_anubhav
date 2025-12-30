// users/services/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { BaseService } from 'src/Common/services/base.repo.services';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {
    super(userRepo)
  }


  async  findByEmail(email: string) {
      const user = await this.userRepo.findOneBy({ email });
      if (!user) throw new NotFoundException('User not found');
      return user;
  }

  async register(dto: CreateUserDto) {
    return this.create(dto);
  }

  async update(id: number, dto: UpdateUserDto) {
     return this.update(id,dto);
  }

  async findAll() {
    return this.findAll();
  }

  async findByIds(id: number) {
    return this.findOne(id);
  }
}
