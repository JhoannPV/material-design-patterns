export interface BancoPrestamoAdapter {
    solicitarPrestamo(monto: number): boolean;
}