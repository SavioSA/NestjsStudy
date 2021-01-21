import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Products } from './products.model'
import { ProductsService } from "./produtcs.service";

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){

        

    }


    @Get()
    async getAll(): Promise<Products[]> {

        return this.productsService.getAll() ;

    }

    @Get(':id')

    async getOne(@Param() params): Promise<Products> {
  
      return this.productsService.getOne(params.id)
  
    }

    @Post()

    async create(@Body() product: Products){

        return this.productsService.create(product);

    }

    @Put()

    async change(@Body() product:Products): Promise <[number, Products[]]>{

        return this.productsService.change(product);

    }

    @Delete(':id')

    async del(@Param() params) {

        this.productsService.del(params.id)

    }

}