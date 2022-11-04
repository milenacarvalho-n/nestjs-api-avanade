import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async authLogin(login, password) {
        console.log("No Service - Login " , login);
        console.log("No service - Password " , password);
        return {login, password, msg: 'Usuário autenticado com sucesso!'};
    }
}
