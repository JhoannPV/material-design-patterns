import { Color } from "../../color";
import { Forma } from "../forma";

export class Cuadrado extends Forma {

    public constructor(color: Color) {
        super(color);
    }

    dibujar(): void {
        console.log(`Dibujando un Cuadrado de color ${this.getColor()}`);
    }
}