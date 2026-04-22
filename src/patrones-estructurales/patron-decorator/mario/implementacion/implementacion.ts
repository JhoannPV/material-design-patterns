import { MarioBase } from "../mario-base";
import { Estrella, Flor, Hoja, Hongo } from "../mario-types";

export const marioDecorator = () => {
    const mariobase = new MarioBase();
    console.log(`Mario base: ${mariobase.getHabilidad()}`);

    const hongo = new Hongo(mariobase);
    console.log(`Mario con hongo: ${hongo.getHabilidad()}`);

    const estrella = new Estrella(mariobase);
    console.log(`Mario con estrella: ${estrella.getHabilidad()}`);

    const hoja = new Hoja(mariobase);
    console.log(`Mario con hoja: ${hoja.getHabilidad()}`);

    const flor = new Flor(mariobase);
    console.log(`Mario con flor: ${flor.getHabilidad()}`);

    const marioCompleto = new Flor(new Hoja(new Estrella(new Hongo(mariobase))));
    console.log(`Mario completo: ${marioCompleto.getHabilidad()}`);
}