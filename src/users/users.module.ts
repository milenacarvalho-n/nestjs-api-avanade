import { Module } from '@nestjs/common';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';
import { PrismaService } from '../prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[EmailModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, EmailService]
})
export class UsersModule {}
