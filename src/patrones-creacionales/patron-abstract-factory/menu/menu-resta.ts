import { inputConsole } from "../../../helpers";
import { Resta } from "../abstract-class";
import { CreateSistema } from "../class-create-sistema";
import { FactoryBinario, FactoryHexadecimal, FactoryNatural } from "../class-type-sistema";
import { recibirNumeros } from "./recibir-numeros";

export const menuResta = () => {
    const rl = inputConsole();

    console.log('Que tipo de suma quiere hacer:');
    console.log('1. Resta de números naturales');
    console.log('2. Resta de números binarios');
    console.log('3. Resta de números hexadecimales');

    let sistema: Resta;

    rl.question("Digite su opción: ", (option: string) => {
        switch (option) {
            case '1':
                rl.close();
                sistema = new CreateSistema().createSistemaResta(new FactoryNatural);
                recibirNumeros(sistema);
                break;
            case '2':
                rl.close();
                sistema = new CreateSistema().createSistemaResta(new FactoryBinario);
                recibirNumeros(sistema);
                break;
            case '3':
                rl.close();
                sistema = new CreateSistema().createSistemaResta(new FactoryHexadecimal);
                recibirNumeros(sistema);
                break;
            default:
                console.log('Opción no válida, por favor elige una opción del 1 al 3.');
                rl.close();
        }
    })
}