import { menuResta, menuSuma } from ".";
import { inputConsole } from "../../../helpers";

export const menu = () => {
    console.log('--- Patrón Abstract Factory ---');
    console.log('Desea Sumar o Restar:');
    console.log('1. Sumar');
    console.log('2. Restar');

    const rl = inputConsole();

    rl.question("Digite su opción: ", (option: string) => {
        switch (option) {
            case '1':
                rl.close();
                menuSuma();
                break;
            case '2':
                rl.close();
                menuResta();
                break;
            default:
                console.log('Opción no válida, por favor elige una opción del 1 al 2.');
                rl.close();
        }
    });
}
