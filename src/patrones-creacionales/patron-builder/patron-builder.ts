import { DirectorBuilderReservacion } from "./class-director-builder-reservacion";

export const patronBuilder = () => {
    const reservacioncomun = new DirectorBuilderReservacion().createReservacionComun();
    const reservacionvip = new DirectorBuilderReservacion().createReservacionVip();

    console.log("Reservación Común:", reservacioncomun.data);
    console.log("Reservación VIP:", reservacionvip.data);
}