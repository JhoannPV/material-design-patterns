import { ColorBlue, ColorRed } from "../color";
import { Circulo, Cuadrado } from "../forma";

export const implBridge = () => {
    // Circulo
    const circulo = new Circulo(new ColorRed());
    circulo.dibujar();

    circulo.setColor(new ColorBlue());
    circulo.dibujar();

    // Cuadrado
    const cuadrado = new Cuadrado(new ColorRed());
    cuadrado.dibujar();

    cuadrado.setColor(new ColorBlue());
    cuadrado.dibujar();
}