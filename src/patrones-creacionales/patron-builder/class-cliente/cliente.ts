export class Cliente {
    private id: number;
    private nombre: string;
    private email: string
    private telefono: string;

    constructor(id: number, nombre: string, email: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}