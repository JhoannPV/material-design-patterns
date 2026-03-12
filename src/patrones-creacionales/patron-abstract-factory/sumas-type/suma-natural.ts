import { Suma } from "../abstract-class";

export class SumaNatural implements Suma {
    calcular(num1: string, num2: string): string {
        const numero1 = parseInt(num1);
        const numero2 = parseInt(num2);
        return numero1 + numero2 + ' es una suma de números naturales';
    }
}