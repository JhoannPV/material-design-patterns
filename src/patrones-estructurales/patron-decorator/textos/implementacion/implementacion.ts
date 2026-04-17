import { FormateadorMayusculas, FormateadorRemplazo } from "../texto-formateadores";
import { TextoPlano } from "../texto-plano";

export const textsDecorator = () => {
    const textoSimple = new TextoPlano('Hola mundo');
    console.log(textoSimple.formatear());

    const textoMayusculas = new FormateadorMayusculas(textoSimple);
    console.log(textoMayusculas.formatear());

    const textoRemplazado = new FormateadorRemplazo(textoSimple, 'mundo', 'compañeros');
    console.log(textoRemplazado.formatear());
}