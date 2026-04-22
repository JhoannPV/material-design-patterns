import { NotificationInterface } from "../notificacion";

export abstract class NotificationDecorator implements NotificationInterface {
    protected notification: NotificationInterface;

    constructor(notification: NotificationInterface) {
        this.notification = notification;
    }

    abstract send(): string;
}