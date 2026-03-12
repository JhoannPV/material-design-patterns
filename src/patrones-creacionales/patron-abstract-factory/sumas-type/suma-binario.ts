import { Suma } from "../abstract-class";

export class SumaBinario implements Suma {
    calcular(num1: string, num2: string): string {
        const esBinario = (valor: string): boolean => /^[01]+$/.test(valor.trim());

        if (!esBinario(num1) || !esBinario(num2)) {
            return 'Entrada inválida: para suma binaria solo se permiten 0 y 1.';
        }

        const numero1 = parseInt(num1, 2);
        const numero2 = parseInt(num2, 2);
        return numero1 + numero2 + ' es una suma de números binarios';
    }
}