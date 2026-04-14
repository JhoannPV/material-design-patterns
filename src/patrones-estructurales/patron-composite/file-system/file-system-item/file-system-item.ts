export interface FileSystemItem {
    getName(): string;
    getSize(): number;
    print(indent?: string): void;
}