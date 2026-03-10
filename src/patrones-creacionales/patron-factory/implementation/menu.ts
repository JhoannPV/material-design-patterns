import { inputConsole } from "../../../helpers";
import { CreateNotification } from "../class-create-notification";
import { FactoryEmail, FactoryPush, FactorySMS } from "../class-factory-notification";

export const menu = () => {
    console.log('--- Patrón Factory ---');
    console.log('Querido usuario, elige el tipo de notificación que deseas recibir:');
    console.log('1. Email');
    console.log('2. SMS');
    console.log('3. Push Notification');

    const rl = inputConsole();

    const notification = new CreateNotification();

    rl.question("Digite su opción: ", (option: string) => {
        switch (option) {
            case '1':
                notification.createNotification(new FactoryEmail());
                break;
            case '2':
                notification.createNotification(new FactorySMS());
                break;
            case '3':
                notification.createNotification(new FactoryPush());
                break;
            default:
                console.log('Opción no válida, por favor elige una opción del 1 al 3.');
        }
        rl.close();
    });
}





