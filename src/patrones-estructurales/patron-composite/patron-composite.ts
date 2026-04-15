import { fileSystemComposite } from "./file-system/implementacion"
import { sistemaTareasComposite } from "./sistema-de-tareas/implementacion";
import { tiendaComposite } from "./tienda/implementacion";

export const patronComposite = () => {

    // FileSystemExample
    console.log('Sistema de Archivos: \n');
    fileSystemComposite();

    // Sistema de Tareas
    console.log('\nSistema de Tareas: \n');
    sistemaTareasComposite();

    // Tienda
    console.log('\nTienda: \n');
    tiendaComposite();
}