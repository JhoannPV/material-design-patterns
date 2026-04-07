import { ColorBlue, ColorRed } from "../color";
import { Circulo } from "../forma";

export const implBridge = () => {
    const circulo = new Circulo(new ColorRed());
    circulo.dibujar();

    circulo.setColor(new ColorBlue());
    circulo.dibujar();
}