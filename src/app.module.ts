import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaEmployeeRepository } from './repositories/prisma/prismaEmployeeRepository';
import { EmployeeRepository } from './repositories/employeeRepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: EmployeeRepository,
      useClass: PrismaEmployeeRepository,
    },
  ],
})
export class AppModule { }