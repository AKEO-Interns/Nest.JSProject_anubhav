import { Controller } from '@nestjs/common';
import { UsersService } from '../UserServices/user.service';
import { BaseController } from 'src/Common/services/base.curd.service';
import { User } from '../entities/user.entity';
import { BaseService } from 'src/Common/services/base.repo.services';

@Controller('users')
export class UsersController extends BaseController<User> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  findByEmail(id: number) {
    return this.usersService.findOne(id);
  }
}
