import { Resta } from "../abstract-class";

export class RestaNatural implements Resta {
    calcular(num1: string, num2: string): string {
        const numero1 = parseInt(num1);
        const numero2 = parseInt(num2);
        return numero1 - numero2 + ' es una resta de números naturales';
    }
}