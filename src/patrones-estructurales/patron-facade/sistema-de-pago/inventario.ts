export class Inventario {
    verificar(stockId: string): boolean {
        const inventario: Record<string, number> = {
            'zapatos': 10,
            'medias': 0,
        };

        return inventario[stockId] > 0;
    }
}