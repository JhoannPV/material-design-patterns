import { inputConsole } from "../../../helpers";
import { Resta, Suma } from "../abstract-class";

export const recibirNumeros = (operation: Suma | Resta) => {
    const rl = inputConsole();
    rl.question("Digite el primer número: ", (num1: string) => {
        rl.question("Digite el segundo número: ", (num2: string) => {
            const result = operation.calcular(num1, num2);
            console.log(result);
            rl.close();
        });
    });
}