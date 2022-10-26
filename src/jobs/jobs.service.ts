import { Injectable, NotFoundException } from '@nestjs/common';
import { Job } from './interfaces/jobs.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class JobsService {
    constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) {}

    async find(id: string): Promise<Job> {
        return await this.jobModel.findOne({ _id: id });
    }

    async getAllJobs(): Promise<Job[]> {
        const jobData = await this.jobModel.find();
        if (!jobData || jobData.length == 0) {
            throw new NotFoundException('Students data not found!');
        }
        return jobData;
    }

    async create(job: Job): Promise<Job> {
        const newJob = new this.jobModel(job);
        return await newJob.save();
    }

    async update(id: string, job: Job): Promise<Job> {
        return await this.jobModel.findByIdAndUpdate(id, job, {
            new: true
        })
    }

    async delete(id: string): Promise<Job> {
        return await this.jobModel.findByIdAndRemove(id);
    }

}
