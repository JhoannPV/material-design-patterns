export class Pago {
    cobrar(usuarioId: string, monto: number): boolean {
        return (usuarioId != '' && monto > 0);
    }
}