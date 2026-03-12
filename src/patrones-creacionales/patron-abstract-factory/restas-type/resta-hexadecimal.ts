import { Resta } from "../abstract-class";

export class RestaHexadecimal implements Resta {
    calcular(num1: string, num2: string): string {
        const numero1 = parseInt(num1, 16);
        const numero2 = parseInt(num2, 16);
        return numero1 - numero2 + ' es una resta de números hexadecimales';
    }
}