import { TreeTypeData } from "../tree-type-data";

// Parte intrinseca: compartida entre objetos, no cambia
export class TreeTypeFlyweight {
    constructor(private readonly data: TreeTypeData) { }

    draw(x: number, y: number): string {
        return `Arbol ${this.data.name} en (${x}, ${y}) color:${this.data.color} textura:${this.data.texture}`;
    }
}