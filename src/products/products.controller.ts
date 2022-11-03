import { Body, Controller, Get, Post, Param, Patch, ParseIntPipe } from '@nestjs/common';
import { CreateProductsDTO } from './dto/createProducts.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    // criar
    @Post()
    // DTO(data transfer object) é um objeto que contém apenas os dados que você precisa para uma determinada ação.
    // é desing paterns que significa que aplicação está protegida
    // espera os parâmetros definidos no DTO
    create(@Body() request:CreateProductsDTO) {
        return this.productsService.create();
    }   
    // listar todos
    @Get()
    findAll(){
        return this.productsService.findAll();
    }
    // listar um 
    @Get(':id')
    // sempre que for idColumn, pegar com @param e definir o tipo
    // ParseIntPipe age como um Middleware: está entre a origem e o destino (intefere no comportamento das informações trafegadas)
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.productsService.findOne(+id);
    }
    // atualizar 
    @Patch(':id')
    update(@Param('id') id: string, @Body() request: CreateProductsDTO){
        // +id converte em number | Number(id)
        return this.productsService.update(+id, request);
    }
    // deletar

}
