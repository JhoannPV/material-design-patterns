import { Tree } from "../tree";
import { TreeTypeFactory } from "../tree-type-factory";

export const forestFlyweight = () => {
    console.log('Bosque en videojuego');

    const treeFactory = new TreeTypeFactory();
    const trees: Tree[] = [];

    for (let i = 0; i < 1000; i++) {
        const isPine = i % 2 === 0;
        const treeType = treeFactory.getTreeType(
            isPine
                ? { name: 'Pino', color: 'Verde oscuro', texture: 'Rugosa' }
                : { name: 'Cerezo', color: 'Rosa', texture: 'Lisa' },
        );

        trees.push({ x: i % 100, y: Math.floor(i / 100), type: treeType });
    }

    console.log(trees[0]?.type.draw(trees[0].x, trees[0].y));
    console.log(trees[1]?.type.draw(trees[1].x, trees[1].y));
    console.log(`Arboles totales: ${trees.length}`);
    console.log(`Tipos de arbol creados (flyweights): ${treeFactory.cacheSize}`);
};