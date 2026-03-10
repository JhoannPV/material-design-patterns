import { ClassNotification } from "../class";

export class PushNotification extends ClassNotification {
    getChannel(): string {
        return 'Push';
    }

    send(): void {
        console.log(`[${this.getId()}] Enviando notificación por ${this.getChannel()} a ${this.getRecipient()}: ${this.getMessage()}, ${this.getSentAt()}`);
    }
}