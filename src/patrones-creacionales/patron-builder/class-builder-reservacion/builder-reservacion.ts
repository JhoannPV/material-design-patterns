import { Cliente } from "../class-cliente";
import { Habitacion } from "../class-habitacion";
import { Reservacion } from "../class-reservacion";
import { Data } from "../interface";

export class BuilderReservacion {
    constructor(
        private data: Partial<Data> = {}
    ) { }

    getId(id: number): this {
        this.data.id = id;
        return this;
    }
    getCliente(cliente: Cliente): this {
        this.data.cliente = cliente;
        return this;
    }
    getHabitacion(habitacion: Habitacion): this {
        this.data.habitacion = habitacion;
        return this;
    }
    getFechaEntrada(fechaEntrada: Date): this {
        this.data.fechaEntrada = fechaEntrada;
        return this;
    }
    getFechaSalida(fechaSalida: Date): this {
        this.data.fechaSalida = fechaSalida;
        return this;
    }
    getTv(tv: boolean): this {
        this.data.tv = tv;
        return this;
    }
    getAire(aire: string): this {
        this.data.aire = aire;
        return this;
    }
    getDesayuno(desayuno: number): this {
        this.data.desayuno = desayuno;
        return this;
    }
    getLavado(lavado: boolean): this {
        this.data.lavado = lavado;
        return this;
    }
    getPlanchado(planchado: number): this {
        this.data.planchado = planchado;
        return this;
    }
    build() {
        if (!this.data.id || !this.data.cliente || !this.data.habitacion || !this.data.fechaEntrada || !this.data.fechaSalida) {
            throw new Error("Faltan datos obligatorios para construir la reservación.");
        }
        return new Reservacion(this.data as Data);
    }
}