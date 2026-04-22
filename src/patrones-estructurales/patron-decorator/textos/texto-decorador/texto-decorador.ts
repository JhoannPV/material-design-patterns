import { Texto } from "../texto";

export abstract class TextoDecorador implements Texto {
    constructor(protected texto: Texto) { }

    abstract formatear(): string;
}