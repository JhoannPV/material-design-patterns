import { NotificationInterface } from '../notificacion';

export class BaseNotification implements NotificationInterface {
    constructor(
        private message: string
    ) { }

    send(): string {
        return `Mensaje enviado: ${this.message}`;
    }
}