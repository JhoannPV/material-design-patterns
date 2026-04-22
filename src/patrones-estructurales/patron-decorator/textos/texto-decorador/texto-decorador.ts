import { Texto } from "../texto";

export abstract class TextoDecorador implements Texto {
    constructor(protected texto: Texto) { }

    formatear(): string {
        return this.texto.formatear();
    }
}