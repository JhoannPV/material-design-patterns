import { AbstractFactory, Resta, Suma } from "../abstract-class";
import { RestaBinario, RestaNatural } from "../restas-type";
import { SumaBinario } from "../sumas-type";

export class FactoryBinario implements AbstractFactory {
    createSuma(): Suma {
        return new SumaBinario();
    }
    createResta(): Resta {
        return new RestaBinario();
    }
}