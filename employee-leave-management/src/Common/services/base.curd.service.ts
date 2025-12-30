// common/controllers/base.controller.ts
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { BaseService } from './base.repo.services';
import { ObjectLiteral } from 'typeorm';

export class BaseController<T extends ObjectLiteral> {
  constructor(protected readonly service: BaseService<T>) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: any) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
