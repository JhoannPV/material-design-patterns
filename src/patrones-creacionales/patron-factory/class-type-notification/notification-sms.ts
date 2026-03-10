import { ClassNotification } from "../class";

export class SMSNotification extends ClassNotification {
    getChannel(): string {
        return 'SMS';
    }

    send(): void {
        console.log(`[${this.getId()}] Enviando notificación por ${this.getChannel()} a ${this.getRecipient()}: ${this.getMessage()}, ${this.getSentAt()}`);
    }
}