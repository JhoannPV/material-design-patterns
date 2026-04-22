import { MarioInterface } from "../mario-interface";
import { MarioDecorador } from "../mario-decorador";

export class Estrella extends MarioDecorador {
    constructor(mario: MarioInterface) {
        super(mario);
    }

    public getHabilidad(): string {
        return this.mario.getHabilidad() + " ser invencible,";
    }
}