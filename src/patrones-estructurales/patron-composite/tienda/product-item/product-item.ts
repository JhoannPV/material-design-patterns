export interface ProductItem {
    name: string;
    price?: number;
    description: string;
    getPrice(): number;
    getDetails(indent: string): void;
}