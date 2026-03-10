import { ClassNotification } from "../class/class-notification";

export abstract class Factory {
    abstract create(): ClassNotification;
}