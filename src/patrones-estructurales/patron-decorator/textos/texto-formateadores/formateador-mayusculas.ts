import { Texto } from "../texto";
import { TextoDecorador } from "../texto-decorador";

export class FormateadorMayusculas extends TextoDecorador {
    constructor(texto: Texto) {
        super(texto);
    }

    // Sobrescribimos el método formatear para convertir el texto a mayúsculas
    // override implicito
    formatear(): string {
        return this.texto.formatear().toUpperCase();
    }
}