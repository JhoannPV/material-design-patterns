import { Suma } from "../abstract-class";

export class SumaHexadecimal implements Suma {
    calcular(num1: string, num2: string): string {
        const numero1 = parseInt(num1, 16);
        const numero2 = parseInt(num2, 16);
        return numero1 + numero2 + ' es una suma de números hexadecimales';
    }
}