export class Habitacion {
    private id: number;
    private numCamas: number;
    private precio: number;

    constructor(id: number, numCamas: number, precio: number) {
        this.id = id;
        this.numCamas = numCamas;
        this.precio = precio;
    }
}