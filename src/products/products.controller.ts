import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/createUser.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    // criar
    @Post()
    create() {
        return this.productsService.create();
    }   
    // listar todos
    // listar um 
    // atualizar 
    // deletar

}
