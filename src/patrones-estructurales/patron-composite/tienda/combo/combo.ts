import { ProductItem } from "../product-item";

export class Combo implements ProductItem {
    private productItem: ProductItem[] = [];

    constructor(
        public name: string,
        public description: string
    ) { }

    addProduct(item: ProductItem): void {
        this.productItem.push(item);
    }

    getPrice(): number {
        return this.productItem.reduce((total: number, item: ProductItem) => total + item.getPrice(), 0);
    }

    getDetails(indent: string = ''): void {
        console.log(`${indent}${this.name}: $${this.getPrice()} - ${this.description}`);
        this.productItem.forEach(item => item.getDetails(indent + "  "));
    }
}