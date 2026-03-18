import { Tecnica } from "../class-tecnicas";

export interface DataSaiyajin {
    nombre: string;
    poder: number;
    transformacion: string;
    clase: string;
    colorCabello: string;
    conCola: boolean;
    tecnicas: Tecnica[];
}