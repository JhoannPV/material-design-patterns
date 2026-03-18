import { Tecnica } from "../class-tecnicas";
import { DataSaiyajin } from "../data-saiyajin";

export class Saiyajin {
    constructor(
        private data: Partial<DataSaiyajin> = {}
    ) { }

    getNombre(): string {
        return this.data.nombre as string;
    }
    getPoder(): number {
        return this.data.poder as number;
    }
    getTransformacion(): string {
        return this.data.transformacion as string;
    }
    getClase(): string {
        return this.data.clase as string;
    }
    getColorCabello(): string {
        return this.data.colorCabello as string;
    }
    getConCola(): boolean {
        return this.data.conCola as boolean;
    }

    setNombre(nombre: string): this {
        this.data!.nombre = nombre;
        return this;
    }
    setPoder(poder: number): this {
        this.data!.poder = poder;
        return this;
    }
    setTransformacion(transformacion: string): this {
        this.data!.transformacion = transformacion;
        return this;
    }
    setClase(clase: string): this {
        this.data!.clase = clase;
        return this;
    }
    setColorCabello(colorCabello: string): this {
        this.data!.colorCabello = colorCabello;
        return this;
    }
    setConCola(conCola: boolean): this {
        this.data!.conCola = conCola;
        return this;
    }
    setTecnicas(tecnicas: Tecnica[]): this {
        this.data!.tecnicas = tecnicas;
        return this;
    }
    build(): Saiyajin {
        return this.clone();
    }
    clone(): Saiyajin {
        const tecnicasClonadas = this.data.tecnicas?.map((tecnica) => tecnica.clone());

        return new Saiyajin({
            ...this.data,
            tecnicas: tecnicasClonadas,
        });
    }
    getData(): DataSaiyajin {
        return this.data as DataSaiyajin;
    }
}