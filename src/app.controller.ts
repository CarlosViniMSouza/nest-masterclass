import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) { }

  @Get()
  async getServer() {
    const newMember = await this.prisma.employee.create({
      data: {
        id: 'Tech Lead Level 3',
        name: 'Carlos Souza',
        occupation: 'S.D.E. Level 3',
      }
    });

    return { member: newMember };
  }
}
