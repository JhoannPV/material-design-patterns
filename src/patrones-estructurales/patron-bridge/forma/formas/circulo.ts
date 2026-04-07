import { Color } from "../../color";
import { Forma } from "../forma";

export class Circulo implements Forma {
    private color: Color;

    public constructor(color: Color) {
        this.color = color;
    }

    setColor(color: Color) {
        this.color = color;
    }

    dibujar(): void {
        console.log(`Dibujando un círculo de color ${this.color.getColor()}`);
    }
}