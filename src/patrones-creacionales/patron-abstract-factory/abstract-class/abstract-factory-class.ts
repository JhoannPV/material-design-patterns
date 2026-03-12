import { Resta, Suma } from ".";

export abstract class AbstractFactory {
    abstract createSuma(): Suma;
    abstract createResta(): Resta;
}