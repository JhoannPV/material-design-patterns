export class ClassNotification {
    private id: string;
    private recipient: string;
    private message: string;
    private sentAt: Date;

    constructor(id: string, recipient: string, message: string, sentAt: Date) {
        this.id = id;
        this.recipient = recipient;
        this.message = message;
        this.sentAt = sentAt;
    }

    getId(): string {
        return this.id;
    }

    getRecipient(): string {
        return this.recipient;
    }

    getMessage(): string {
        return this.message;
    }
    getSentAt(): Date {
        return this.sentAt;
    }

    send(): void { }
}