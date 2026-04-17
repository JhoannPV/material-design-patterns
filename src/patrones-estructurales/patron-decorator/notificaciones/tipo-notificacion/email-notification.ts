import { NotificationInterface } from "../notificacion";
import { NotificationDecorator } from "../notificacion-decorador";

export class EmailNotification extends NotificationDecorator {
    constructor(notification: NotificationInterface) {
        super(notification);
    }

    // Sobrescribimos el método send para agregar la funcionalidad específica de enviar por email
    // override implicito
    send(): string {
        return `${this.notification.send()} - a través de Email.`;
    }
}