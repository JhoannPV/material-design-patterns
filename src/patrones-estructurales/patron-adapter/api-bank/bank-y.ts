export class BankY {
    public aprobarPrestamo(monto: number): boolean {
        return monto >= 12000 ? true : false;
    }
}