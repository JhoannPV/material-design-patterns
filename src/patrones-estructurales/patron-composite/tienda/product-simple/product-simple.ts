import { ProductItem } from "../product-item";

export class ProductSimple implements ProductItem {
    constructor(
        public name: string,
        public price: number,
        public description: string
    ) { }

    getPrice(): number {
        return this.price;
    }

    getDetails(indent: string = ''): void {
        console.log(`${indent}${this.name}: $${this.price} - ${this.description}`);
    }
}