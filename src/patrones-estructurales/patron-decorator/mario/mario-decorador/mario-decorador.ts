import { MarioInterface } from "../mario-interface";

export abstract class MarioDecorador implements MarioInterface {
    protected mario: MarioInterface;

    constructor(mario: MarioInterface) {
        this.mario = mario;
    }

    abstract getHabilidad(): string;
}