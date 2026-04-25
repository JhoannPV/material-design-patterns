export type User = {
    id: number;
    name: string;
    role: string;
}

export const userList: User[] = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
]