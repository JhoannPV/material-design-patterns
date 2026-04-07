import { BancoPrestamoAdapter } from "../adapter";

export class Cliente {
    private name: string;
    private bank: BancoPrestamoAdapter;

    constructor(
        name: string,
        bank: BancoPrestamoAdapter
    ) {
        this.name = name;
        this.bank = bank;
    }

    solicitarPrestamo(monto: number): void {
        const resultado = this.bank.solicitarPrestamo(monto);
        if (resultado) {
            console.log(`El cliente ${this.name} ha solicitado un préstamo de ${monto} con éxito.`);
        } else {
            console.log(`El cliente ${this.name} no pudo solicitar el préstamo de ${monto}.`);
        }
    }
}