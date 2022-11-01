import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UpdateUserDTO } from './dto/updateUser.dto';
import * as bcrypt from 'bcrypt';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private emailService: EmailService) {}

  async verifyUserExists(email: string): Promise<boolean> {
    const user = await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    return user ? true : false;
  }
  // retorna uma promise(string) | async
  async crypto(password: string): Promise<string> {
    const salt = bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, await salt);

    return hashedPassword;

  }
  
  async create(data): Promise<users> {
  const {name, email, password} = data;

  // verifica se o usuário já existe
  const checkUser = await this.verifyUserExists(email);
  let user = undefined;
  // cria o usuário
  if(!checkUser){
    user = await this.prisma.users.create({
      data: {
        name,
        email,
        password: await this.crypto(password),
      },
    });
    // enviando email
    if(
      await this.emailService.sendEmail(email, 'Bem vindo ao Sistema', 'Seja bem vindo ao site Fiap-Avanade', {}
    )){
      console.log('Email enviado com sucesso');
    }
    
  }
 
  if(!user) {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        message:'Erro ao criar usuário',
      },
      HttpStatus.FORBIDDEN,
      );
    }
  return user;
 }

  async findAll(): Promise<users[]> {
    return this.prisma.users.findMany();
  }

  async findOne(id: number): Promise<users> {
    return await this.prisma.users.findUnique({
      where: {
        id: id,
        },
        });  }

  async update(id: number, req: UpdateUserDTO): Promise<string> {
    return `Usuário ${id} atualizado com sucesso!`;
  }
  async remove(id: number): Promise<string> {
    return `Usuário ${id} deletado com sucesso!`;
  }
}