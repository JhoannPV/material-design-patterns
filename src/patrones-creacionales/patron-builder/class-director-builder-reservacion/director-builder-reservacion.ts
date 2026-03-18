import { BuilderReservacion } from "../class-builder-reservacion";
import { Cliente } from "../class-cliente";
import { Habitacion } from "../class-habitacion";

export class DirectorBuilderReservacion {
    createReservacionComun() {
        const cliente = new Cliente(1, "Cliente Comun", "cliente@correo.com", "999999999");
        const habitacion = new Habitacion(1, 2, 120);

        return new BuilderReservacion()
            .getId(1)
            .getCliente(cliente)
            .getHabitacion(habitacion)
            .getFechaEntrada(new Date())
            .getFechaSalida(new Date(Date.now() + 10 * 24 * 60 * 60 * 1000))
            .build();
    }

    createReservacionVip() {
        const cliente = new Cliente(2, "Cliente Vip", "clientevip@correo.com", "888888888");
        const habitacion = new Habitacion(2, 4, 300);

        return new BuilderReservacion()
            .getId(2)
            .getCliente(cliente)
            .getHabitacion(habitacion)
            .getFechaEntrada(new Date())
            .getFechaSalida(new Date(Date.now() + 20 * 24 * 60 * 60 * 1000))
            .getTv(true)
            .getAire("Sí")
            .getDesayuno(1)
            .getLavado(true)
            .getPlanchado(1)
            .build();
    }
}