export class Envio {
    generarGuia(usuarioId: string): string {
        return `GUIA-${usuarioId}-${Date.now()}`;
    }
}