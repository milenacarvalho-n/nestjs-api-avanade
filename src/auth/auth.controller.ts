import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    // injeção de dependências
    constructor(private readonly authService:AuthService){}

    @Post('login')
    async authLogin(@Body() req) {
        const {login, password} = req;
        console.log("Login " , login);
        console.log("Password " , password);
        return this.authService.authLogin(login, password);
    }
}
