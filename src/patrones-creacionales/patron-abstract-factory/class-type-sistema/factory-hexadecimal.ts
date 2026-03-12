import { AbstractFactory, Resta, Suma } from "../abstract-class";
import { RestaHexadecimal } from "../restas-type";
import { SumaHexadecimal } from "../sumas-type";

export class FactoryHexadecimal implements AbstractFactory {
    createSuma(): Suma {
        return new SumaHexadecimal();
    }
    createResta(): Resta {
        return new RestaHexadecimal();
    }
}