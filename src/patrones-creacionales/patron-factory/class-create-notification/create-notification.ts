import { Factory } from "../abstrac-class";

export class CreateNotification {
    createNotification(factory: Factory) {
        return factory.create().send();
    }
}