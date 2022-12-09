import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { EmployeeRepository } from '../employeeRepository';

@Injectable()
export class PrismaEmployeeRepository implements EmployeeRepository {
    constructor(private prisma: PrismaService) { }

    async create(name: string, occupation: string): Promise<void> {
        await this.prisma.employee.create({
            data: {
                id: randomUUID(),
                name,
                occupation,
            },
        });
    }
}