import { Controller, Get, Post, Put, Delete } from '@nestjs/common';


@Controller('jobs')

export class JobsController {

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