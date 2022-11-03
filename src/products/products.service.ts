import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    // async é uma intenção. vai executar algo externo e vai demorar
    async create(): Promise<string> {
        return 'This action adds a new product';
    }
    async findAll(): Promise<string>{
        return 'Lista de produtos!!!'
    }
    async findOne(id: number): Promise <string>{
        return `retorna um item ${id}`
    }
    async update(id: number, request: object): Promise<string>{
        return 'Produto atualizado!!'
    }

}
