import { Factory } from "../abstrac-class";
import { ClassNotification } from "../class";
import { SMSNotification } from "../class-type-notification";

export class FactorySMS implements Factory {
    create(): ClassNotification {
        return new SMSNotification("2", "Jhoann", "Bienvenido a nuestra plataforma", new Date());
    }
}