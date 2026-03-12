import { AbstractFactory } from "../abstract-class";

export class CreateSistema {
    createSistemaSuma(factory: AbstractFactory) {
        return factory.createSuma();
    }
    createSistemaResta(factory: AbstractFactory) {
        return factory.createResta();
    }
}