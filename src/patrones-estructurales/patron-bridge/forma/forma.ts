import { Color } from "../color";

export abstract class Forma {
    private color: Color;

    public constructor(color: Color) {
        this.color = color;
    }

    getColor() {
        return this.color.getColor();
    }

    abstract dibujar(): void;
}