import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// sem parâmetro, pega na pasta raiz do projeto
@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/login')
  getLogin(): string {
    return this.appService.getLogin();
  }
  @Get('/register')
  getRegister(): string {
    // está apenas redirecionando o usuário para o serviço correto
    return this.appService.getRegister();
  }
}
