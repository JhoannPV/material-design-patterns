import { AbstractFactory, Resta, Suma } from "../abstract-class";
import { RestaNatural } from "../restas-type";
import { SumaNatural } from "../sumas-type";

export class FactoryNatural implements AbstractFactory {
    createSuma(): Suma {
        return new SumaNatural();
    }
    createResta(): Resta {
        return new RestaNatural();
    }
}