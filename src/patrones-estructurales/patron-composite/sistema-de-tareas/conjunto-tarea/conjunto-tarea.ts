import { SistemaTareaItem } from "../sistema-tarea-item";

export class ConjuntoTarea implements SistemaTareaItem {
    private tareas: SistemaTareaItem[] = [];

    constructor(
        private nombre: string,
        private descripcion: string,
    ) { }

    addTarea(tarea: SistemaTareaItem): void {
        this.tareas.push(tarea);
    }

    getNombre(): string {
        return this.nombre;
    }
    getDescripcion(): string {
        return this.descripcion;
    }

    getDuracion(): number {
        return this.tareas.reduce((total, tarea) => total + tarea.getDuracion(), 0);
    }

    print(indent: string = "", index: string = ''): void {
        console.log(`${indent}${index}Tarea: ${this.getNombre()} - ${this.getDescripcion()} (${this.getDuracion()} horas)`);
        this.tareas.forEach((tarea, index) => tarea.print((indent + "  "), `${index + 1}. `));
    }
}