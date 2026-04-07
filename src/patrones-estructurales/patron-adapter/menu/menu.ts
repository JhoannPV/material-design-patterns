import { inputConsole } from "../../../helpers";
import { AdapterBankX, AdapterBankY } from "../adapter";
import { Cliente } from "../cliente";

export const menu = () => {
    console.log('----Prestasmos Bancarios----');
    console.log('Elija a que banco desea hacer el prestamo:');
    console.log('1. Banco X');
    console.log('2. Banco Y');

    const rl = inputConsole();

    rl.question("Digite su opción: ", (option: string) => {
        switch (option) {
            case '1':
                rl.question("Digite la cantidad del prestamo: ", (montoInput: string) => {
                    const monto = Number(montoInput);
                    if (Number.isNaN(monto)) {
                        console.log('Cantidad no válida. Debe ingresar un número.');
                        rl.close();
                        return;
                    }

                    const clienteX = new Cliente('Juan', new AdapterBankX());
                    clienteX.solicitarPrestamo(monto);
                    rl.close();
                });
                break;
            case '2':
                rl.question("Digite la cantidad del prestamo: ", (montoInput: string) => {
                    const monto = Number(montoInput);
                    if (Number.isNaN(monto)) {
                        console.log('Cantidad no válida. Debe ingresar un número.');
                        rl.close();
                        return;
                    }

                    const clienteY = new Cliente('Juan', new AdapterBankY());
                    clienteY.solicitarPrestamo(monto);
                    rl.close();
                });
                break;
            default:
                console.log('Opción no válida, por favor elige una opción del 1 al 2.');
                rl.close();
        }
    });
}