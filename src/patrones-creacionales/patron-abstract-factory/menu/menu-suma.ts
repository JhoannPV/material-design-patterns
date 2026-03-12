import { recibirNumeros } from ".";
import { inputConsole } from "../../../helpers";
import { SumaBinario, SumaHexadecimal, SumaNatural } from "../sumas-type";

export const menuSuma = () => {
    const rl = inputConsole();

    console.log('Que tipo de suma quiere hacer:');
    console.log('1. Suma de números naturales');
    console.log('2. Suma de números binarios');
    console.log('3. Suma de números hexadecimales');

    rl.question("Digite su opción: ", (option: string) => {
        switch (option) {
            case '1':
                rl.close();
                recibirNumeros(new SumaNatural);
                break;
            case '2':
                rl.close();
                recibirNumeros(new SumaBinario);
                break;
            case '3':
                rl.close();
                recibirNumeros(new SumaHexadecimal);
                break;
            default:
                console.log('Opción no válida, por favor elige una opción del 1 al 3.');
                rl.close();
        }
    })
}