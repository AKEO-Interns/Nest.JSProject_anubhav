import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { BullModule } from '@nestjs/bullmq';
import { LeaveModule } from './Queues/leave.module';

@Module({
  imports: [
     TypeOrmModule.forRoot(typeOrmConfig) ,
      BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    UserModule,LeaveModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
