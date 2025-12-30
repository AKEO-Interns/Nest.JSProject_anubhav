import { Controller } from '@nestjs/common';
import { UsersService } from '../UserServices/user.service';
import { BaseController } from 'src/Common/services/base.curd.service';
import { User } from '../entities/user.entity';

@Controller('users') // 👈 Must have this
export class UsersController extends BaseController<User> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  // Custom method example
  findByEmail(email: string) {
    return this.usersService.findByEmail(email);
  }
}
