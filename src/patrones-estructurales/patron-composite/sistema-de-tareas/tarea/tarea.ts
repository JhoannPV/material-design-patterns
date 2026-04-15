import { SistemaTareaItem } from "../sistema-tarea-item";

export class Tarea implements SistemaTareaItem {
    constructor(
        private nombre: string,
        private descripcion: string,
        private duracion: number
    ) { }
    getNombre(): string {
        return this.nombre;
    }
    getDescripcion(): string {
        return this.descripcion;
    }
    getDuracion(): number {
        return this.duracion;
    }
    print(indent: string = "", index: string = ''): void {
        console.log(`${indent}${index}Tarea: ${this.getNombre()} - ${this.getDescripcion()} (${this.getDuracion()} horas)`);
    }
}