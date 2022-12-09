import { Get, Post, Body, Controller } from '@nestjs/common';
import { CreateEmployeeBody } from './dtos/createEmployeeBody';
import { EmployeeRepository } from './repositories/employeeRepository';

@Controller('app')
export class AppController {
  constructor(private employeeRepository: EmployeeRepository) { }

  @Get()
  getHello() {
    return 'Hello World!';
  }

  @Post('employee')
  async getEmployee(@Body() body: CreateEmployeeBody) {
    const { name, occupation } = body;

    await this.employeeRepository.create(name, occupation);
  }
}