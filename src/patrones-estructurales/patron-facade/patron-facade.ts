import { CheckoutFacade } from "./checkout-facade";
import { CheckoutInterface } from "./checkout-interface";
import { Envio, Notificador, Pago } from "./sistema-de-pago";
import { Inventario } from './sistema-de-pago/inventario';

export const patronFacade = () => {
    const sistemas: CheckoutInterface = {
        verificarDisponibilidad: new Inventario(),
        pagar: new Pago(),
        eviarGuia: new Envio(),
        notificar: new Notificador()
    }

    // Zapatos
    console.log('Zapatos: ');
    const checkout1 = new CheckoutFacade(sistemas);
    const resultado1 = checkout1.finalizarCompra("usuario1", "zapatos", 2000);
    console.log(resultado1);

    // Medias
    console.log('\nMedias: ');
    const checkout2 = new CheckoutFacade(sistemas);
    const resultado2 = checkout2.finalizarCompra("usuario2", "medias", 500);
    console.log(resultado2);
}