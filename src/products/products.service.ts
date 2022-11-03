import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    // async é uma intenção. vai executar algo externo e vai demorar
   async create(): Promise<string> {
        return 'This action adds a new product';
    }
}
