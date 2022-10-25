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
}
