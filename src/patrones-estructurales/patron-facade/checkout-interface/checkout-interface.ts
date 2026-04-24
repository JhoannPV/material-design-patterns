import { Envio, Inventario, Notificador, Pago } from "../sistema-de-pago";

export interface CheckoutInterface {
    verificarDisponibilidad: Inventario;
    pagar: Pago;
    eviarGuia: Envio;
    notificar: Notificador;
}