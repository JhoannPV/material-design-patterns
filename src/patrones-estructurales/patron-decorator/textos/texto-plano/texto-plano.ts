import { Texto } from "../texto";

export class TextoPlano implements Texto {
    constructor(private texto: string) { }

    formatear(): string {
        return this.texto;
    }
}