import { Color } from "../../color";
import { Forma } from "../forma";

export class Circulo extends Forma {

    public constructor(color: Color) {
        super(color);
    }

    dibujar(): void {
        console.log(`Dibujando un Círculo de color ${this.getColor()}`);
    }
}