import { MarioInterface } from "../mario-interface";

export class MarioBase implements MarioInterface {
    getHabilidad(): string {
        return "Mario tiene la habilidad de saltar,";
    }
}