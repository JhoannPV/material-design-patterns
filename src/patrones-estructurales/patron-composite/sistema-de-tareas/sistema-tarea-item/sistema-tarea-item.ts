export interface SistemaTareaItem {
    getNombre(): string;
    getDescripcion(): string;
    getDuracion(): number;
    print(indent?: string, index?: string): void;
}