import { marioDecorator } from "./mario/implementacion";
import { notificationsDecorator } from "./notificaciones/implementacion"
import { textsDecorator } from "./textos/implementacion";

export const patronDecorator = () => {

    // notificaciones
    console.log('Notificaciones: \n');
    notificationsDecorator();

    // textos
    console.log('\nTextos: \n');
    textsDecorator();

    // mario
    console.log('\nMario: \n');
    marioDecorator();
}