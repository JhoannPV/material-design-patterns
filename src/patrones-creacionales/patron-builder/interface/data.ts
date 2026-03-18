import { Cliente } from "../class-cliente";
import { Habitacion } from "../class-habitacion";

export interface Data {
    id: number;
    cliente: Cliente;
    habitacion: Habitacion;
    fechaEntrada: Date;
    fechaSalida: Date;
    tv?: boolean;
    aire?: string;
    desayuno?: number;
    lavado?: boolean;
    planchado?: number;
}