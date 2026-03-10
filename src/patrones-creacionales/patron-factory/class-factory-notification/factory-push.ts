import { Factory } from "../abstrac-class";
import { ClassNotification } from "../class";
import { PushNotification } from "../class-type-notification";

export class FactoryPush implements Factory {
    create(): ClassNotification {
        return new PushNotification("2", "Jhoann", "Bienvenido a nuestra plataforma", new Date());
    }
}