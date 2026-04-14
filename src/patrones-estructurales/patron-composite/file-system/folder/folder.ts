import { FileSystemItem } from "../file-system-item";

export class Folder implements FileSystemItem {
    private children: FileSystemItem[] = [];

    constructor(private name: string) { }

    add(item: FileSystemItem): void {
        this.children.push(item);
    }

    remove(item: FileSystemItem): void {
        this.children = this.children.filter(c => c !== item);
    }

    getName(): string { return this.name; }

    // Delega a sus hijos y acumula el resultado
    getSize(): number {
        return this.children.reduce((total, item) => total + item.getSize(), 0);
    }

    print(indent = ""): void {
        console.log(`${indent}📁 ${this.name}/`);
        this.children.forEach(child => child.print(indent + "  "));
    }
}