import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
  imports: [],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
