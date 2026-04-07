import { BankX } from "../../api-bank";
import { BancoPrestamoAdapter } from "../adapter";

export class AdapterBankX implements BancoPrestamoAdapter {
    solicitarPrestamo(monto: number): boolean {
        const bankX = new BankX();
        const resultado = bankX.solicitarPrestamoBancario(monto);
        return resultado === 1;
    }
}