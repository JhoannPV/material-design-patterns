import { Factory } from "../abstrac-class";
import { ClassNotification } from "../class";
import { EmailNotification } from "../class-type-notification";

export class FactoryEmail implements Factory {
    create(): ClassNotification {
        return new EmailNotification("1", "Jhoann", "Bienvenido a nuestra plataforma", new Date());
    }
}