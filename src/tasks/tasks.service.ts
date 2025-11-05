import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createTaskDto: CreateTaskDto) {
    return this.task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
      },
    });
  }

  async findAll() {
    return this.task.findMany();
  }

  async findOne(id: string) {
    return this.task.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: string) {
    return this.task.delete({
      where: { id },
    });
  }
}
