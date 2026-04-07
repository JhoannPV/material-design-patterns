import { ConfiguracionApp } from "../configuration-app";

export const implSingleton = () => {
    const configuracionA = ConfiguracionApp.obtenerInstancia();
    const configuracionB = ConfiguracionApp.obtenerInstancia();

    configuracionA.tema = "oscuro";

    console.log("¿Es la misma instancia?:", configuracionA === configuracionB);
    console.log("Tema desde A:", configuracionA.tema);
    console.log("Tema desde B:", configuracionB.tema);
    console.log("Idioma:", configuracionB.idioma);
}