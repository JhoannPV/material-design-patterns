export class Tecnica {
    constructor(
        private nombre: string,
        private daño: number,
    ) { }

    clone(): Tecnica {
        return new Tecnica(this.nombre, this.daño);
    }
}