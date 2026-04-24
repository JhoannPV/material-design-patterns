import { CheckoutInterface } from "../checkout-interface";

export class CheckoutFacade {
    private checkout: CheckoutInterface;

    constructor(checkout: CheckoutInterface) {
        this.checkout = checkout;
    }

    finalizarCompra(usuarioId: string, productId: string, monto: number): string {
        const disponibilidad = this.checkout.verificarDisponibilidad.verificar(productId);
        if (!disponibilidad) {
            return "Producto no disponible";
        } else {
            const pagoExitoso = this.checkout.pagar.cobrar(usuarioId, monto);

            if (!pagoExitoso) {
                return "Pago fallido";
            } else {
                this.checkout.notificar.enviarCorreo(`Compra finalizada con éxito`);
                const guia = this.checkout.eviarGuia.generarGuia(usuarioId);
                return `Guía de envío: ${guia}`;
            }
        }
    }
}