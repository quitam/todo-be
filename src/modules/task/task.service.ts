import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  async findAll(): Promise<{ total: number; items: Task[] }> {
    const result = await this.taskRepository.findAndCount();
    return { total: result[1], items: result[0] };
  }

  // Create Task
  async createTask(task: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.save(task);
  }
}
