import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('jobs')

export class JobsController {

    @Get()
    findAll(): string {
        return '--findAll--';
    }

    @Post()
    create(): string {
        return '--create--'
    }

    @Put()
    update(): string {
        return '--update----'
    }

    @Delete()
    delete(): string {
        return '---delete---'
    }

}