import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) { }

  @Get()
  async getServer(@Body() body: any) {
    const { name, occupation } = body;

    const newMember = await this.prisma.employee.create({
      data: {
        id: randomUUID(),
        name,
        occupation
      }
    });

    return { member: newMember };
  }
}
