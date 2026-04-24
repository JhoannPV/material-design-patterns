import { TreeTypeFlyweight } from "../tree-type-flyweight";

// Parte extrinseca: no compartida, cambia entre objetos
export type Tree = {
    readonly x: number;
    readonly y: number;
    readonly type: TreeTypeFlyweight;
}