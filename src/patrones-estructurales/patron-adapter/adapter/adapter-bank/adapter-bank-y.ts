import { BankY } from "../../api-bank";
import { BancoPrestamoAdapter } from "../adapter";

export class AdapterBankY implements BancoPrestamoAdapter {
    solicitarPrestamo(monto: number): boolean {
        const bankX = new BankY();
        const resultado = bankX.aprobarPrestamo(monto);
        return resultado;
    }
}