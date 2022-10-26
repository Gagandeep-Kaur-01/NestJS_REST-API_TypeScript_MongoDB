import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';


@Controller('jobs')

export class JobsController {
    constructor(private readonly jobsService: JobsService) {}

    // localhost:3000/jobs
    @Get()
    findAll(): string {
        return '--findAll--';
    }

    // localhost:3000/jobs
    @Post()
    create(): string {
        return '--create--'
    }

    // localhost:3000/jobs/id
    @Put(':id')
    update(): string {
        return '--update----'
    }

    // localhost:3000/jobs/id
    @Delete(':id')
    delete(): string {
        return '---delete---'
    }

}