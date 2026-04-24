import { TreeTypeFlyweight } from "../tree-type-flyweight";

export type Tree = {
    readonly x: number;
    readonly y: number;
    readonly type: TreeTypeFlyweight;
}