import { ColorBlue, ColorRed } from "../color";
import { Circulo, Cuadrado } from "../forma";

export const implBridge = () => {
    // Circulo
    const circulo = new Circulo(new ColorRed());
    circulo.dibujar();

    const circulo2 = new Circulo(new ColorBlue());
    circulo2.dibujar();

    // Cuadrado
    const cuadrado = new Cuadrado(new ColorRed());
    cuadrado.dibujar();

    const cuadrado2 = new Cuadrado(new ColorBlue());
    cuadrado2.dibujar();
}