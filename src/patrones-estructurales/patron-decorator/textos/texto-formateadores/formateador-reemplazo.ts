import { Texto } from "../texto";
import { TextoDecorador } from "../texto-decorador";

export class FormateadorRemplazo extends TextoDecorador {
    constructor(
        texto: Texto,
        private buscar: string,
        private reemplazar: string
    ) {
        super(texto);
    }

    // Sobrescribimos el método formatear para reemplazar ciertas palabras en el texto
    // override implicito
    formatear(): string {
        return this.texto.formatear().replace(this.buscar, this.reemplazar);
    }
}