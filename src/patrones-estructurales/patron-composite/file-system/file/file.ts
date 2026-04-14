import { FileSystemItem } from "../file-system-item";

export class File implements FileSystemItem {
    constructor(
        private name: string,
        private size: number
    ) { }

    getName(): string { return this.name; }
    getSize(): number { return this.size; }

    print(indent = ""): void {
        console.log(`${indent}📄 ${this.name} (${this.size} KB)`);
    }
}