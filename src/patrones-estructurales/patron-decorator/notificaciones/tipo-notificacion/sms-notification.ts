import { NotificationInterface } from "../notificacion";
import { NotificationDecorator } from "../notificacion-decorador";

export class SMSNotification extends NotificationDecorator {
    constructor(notification: NotificationInterface) {
        super(notification);
    }

    // Sobrescribimos el método send para agregar la funcionalidad específica de enviar por sms
    // override implicito
    send(): string {
        return `${this.notification.send()} - a través de SMS.`;
    }
}