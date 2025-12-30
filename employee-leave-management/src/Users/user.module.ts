import { Controller, Module } from '@nestjs/common';
import { UsersController } from './Controllers/users.controllers';
import { UsersService } from './UserServices/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
    imports:[
         TypeOrmModule.forFeature([User])
    ],
    controllers :[UsersController],
    providers:[UsersService],
    exports:[UsersService]

})
export class UserModule {}