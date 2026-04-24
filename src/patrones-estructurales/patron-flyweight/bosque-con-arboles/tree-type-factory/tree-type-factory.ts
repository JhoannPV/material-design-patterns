import { TreeTypeData } from "../tree-type-data";
import { TreeTypeFlyweight } from "../tree-type-flyweight";

export class TreeTypeFactory {
    private readonly cache = new Map<string, TreeTypeFlyweight>();

    getTreeType(data: TreeTypeData): TreeTypeFlyweight {
        const key = `${data.name}|${data.color}|${data.texture}`;
        const current = this.cache.get(key);
        if (current) {
            return current;
        }

        const created = new TreeTypeFlyweight(data);
        this.cache.set(key, created);
        return created;
    }

    get cacheSize(): number {
        return this.cache.size;
    }
}