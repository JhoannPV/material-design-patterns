export class BankX {
    public solicitarPrestamoBancario(monto: number): number {
        return monto >= 10000 ? 1 : 0;
    }
}