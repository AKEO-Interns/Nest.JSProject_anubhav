import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class LeaveService {
  constructor(
    @InjectQueue('leave-queue')
    private leaveQueue: Queue,
  ) {}

  async applyLeave(data: any) {
    // Step 1: save to DB (fake)
    const leaveId = Date.now();

    // Step 2: push job to queue
    await this.leaveQueue.add('send-email', {
      email: data.email,
      leaveId,
    });

    return {
      message: 'Leave applied successfully',
      leaveId,
    };
  }
}
