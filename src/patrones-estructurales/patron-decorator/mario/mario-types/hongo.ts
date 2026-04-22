import { MarioInterface } from "../mario-interface";
import { MarioDecorador } from "../mario-decorador";

export class Hongo extends MarioDecorador {
    constructor(mario: MarioInterface) {
        super(mario);
    }

    public getHabilidad(): string {
        return this.mario.getHabilidad() + " ser más grande,";
    }
}