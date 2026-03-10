import { ClassNotification } from "../class";

export class EmailNotification extends ClassNotification {
    getChannel(): string {
        return 'Email';
    }

    send(): void {
        console.log(`[${this.getId()}] Enviando notificación por ${this.getChannel()} a ${this.getRecipient()}: ${this.getMessage()}, ${this.getSentAt()}`);
    }
}