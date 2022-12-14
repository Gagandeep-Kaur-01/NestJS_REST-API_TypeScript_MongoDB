import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDTO } from './dtos/job.dto';
import { Job } from './interfaces/jobs.interface';


@Controller('jobs')

export class JobsController {
    constructor(private readonly jobsService: JobsService) {}

    // localhost:3000/jobs/id
    @Get(':id')
    find(@Param('id') id): Promise<Job> {
        return this.jobsService.find(id);
    }

    // localhost:3000/jobs
    @Get()
    async getJobs(@Res() response) {
    try {
    const studentData = await this.jobsService.getAllJobs();
    return response.status(HttpStatus.OK).json({
    message: 'All jobs data found successfully', studentData,});
    } catch (err) {
    return response.status(err.status).json(err.response);
    }
    }

    // localhost:3000/jobs
    @Post()
    create(@Body() job: JobDTO): Promise<Job> {
        return this.jobsService.create(job);
    }

    // localhost:3000/jobs/id
    @Put(':id')
    update(@Param('id') id, @Body() job: JobDTO): Promise<Job> {
        return this.jobsService.update(id, job);
    }

    // localhost:3000/jobs/id
    @Delete(':id')
    delete(@Param('id') id): Promise<Job> {
        return this.jobsService.delete(id);
    }

}