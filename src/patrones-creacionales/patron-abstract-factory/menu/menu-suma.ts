import { inputConsole } from "../../../helpers";
import { Suma } from "../abstract-class";
import { CreateSistema } from "../class-create-sistema";
import { FactoryBinario, FactoryHexadecimal, FactoryNatural } from "../class-type-sistema";
import { recibirNumeros } from "./recibir-numeros";

export const menuSuma = () => {
    const rl = inputConsole();

    console.log('Que tipo de suma quiere hacer:');
    console.log('1. Suma de números naturales');
    console.log('2. Suma de números binarios');
    console.log('3. Suma de números hexadecimales');

    let sistema: Suma;


    rl.question("Digite su opción: ", (option: string) => {
        switch (option) {
            case '1':
                rl.close();
                sistema = new CreateSistema().createSistemaSuma(new FactoryNatural);
                recibirNumeros(sistema);
                break;
            case '2':
                rl.close();
                sistema = new CreateSistema().createSistemaSuma(new FactoryBinario);
                recibirNumeros(sistema);
                break;
            case '3':
                rl.close();
                sistema = new CreateSistema().createSistemaSuma(new FactoryHexadecimal);
                recibirNumeros(sistema);
                break;
            default:
                console.log('Opción no válida, por favor elige una opción del 1 al 3.');
                rl.close();
        }
    })
}