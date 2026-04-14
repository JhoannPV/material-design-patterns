import { Folder } from "../folder";
import { File } from "../file";

export const fileSystemComposite = () => {
    // Client: trabaja con FileSystemItem sin distinguir tipo
    const root = new Folder("root");

    const src = new Folder("src");
    src.add(new File("index.ts", 12));
    src.add(new File("app.ts", 34));

    const components = new Folder("components");
    components.add(new File("Button.tsx", 8));
    components.add(new File("Modal.tsx", 15));
    src.add(components);

    const assets = new Folder("assets");
    assets.add(new File("logo.png", 220));
    assets.add(new File("styles.css", 45));

    root.add(src);
    root.add(assets);
    root.add(new File("README.md", 5));

    // El cliente llama los mismos métodos sin importar si es File o Folder
    root.print();
    console.log(`\nTamaño total: ${root.getSize()} KB`);
}