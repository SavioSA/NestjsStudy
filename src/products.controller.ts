import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Products } from './products.model'

@Controller('products')
export class ProductsController {

    products: Products[] = [

        new Products("BOOK01", "Books TDD e BDD", 29.90),
        new Products("BOOK02", "Books TDD e BDD2", 39.90),
        new Products("BOOK03", "Books TDD e BDD3", 49.90)

    ]

    @Get()

    getAll(): Products[] {

        return this.products ;

    }

    @Get(':id')

    getOne(@Param() params): string {
  
      return `Returns data of product ${params.id}`;
  
    }

    @Post()

    create(@Body() product): string{

        console.log(product);
        return 'Product Created';

    }

    @Put()

    change(@Body() product): string{

        console.log(product);
        return 'Product Changed';

    }

    @Delete(':id')

    del(@Param() params): string {

        return `Delete Product ${params.id}`

    }

}