import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { LeaveController } from './leave.controller';
import { LeaveService } from './leave.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'leave-queue',
    }),
  ],
  controllers:[LeaveController],
  providers:[LeaveService]
})
export class LeaveModule {}
