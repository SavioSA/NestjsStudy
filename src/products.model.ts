export class Products{

    id: number;
    cod: string;
    name: string;
    price: number;

    constructor(cod: string, name: string, price:number) {

        this.cod = cod;
        this.name = name;
        this.price = price;

    }
    
}