import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Products } from "./products.model";

@Injectable()
export class ProductsService {

    constructor(

        @InjectModel(Products)
        private productsModel : typeof Products

    ){}

    async getAll(): Promise<Products[]> {

        return this.productsModel.findAll();

    }

    async getOne(id: number): Promise<Products> {

        return this.productsModel.findByPk(id);

    }

    async create(product: Products){

        return this.productsModel.create(product);

    }

    async change(product: Products): Promise <[number, Products[]]> {

        return this.productsModel.update(product, {

            where: {
                id: product.id
            }

        });

    }

    async del(id: number){

        const product: Products = await this.getOne(id);
        product.destroy();

    }

}