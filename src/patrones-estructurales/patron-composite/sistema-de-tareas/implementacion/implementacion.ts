import { ConjuntoTarea } from "../conjunto-tarea";
import { Tarea } from "../tarea";

export const sistemaTareasComposite = () => {
    // Cliente: trabaja con Tarea sin distinguir tipo
    const proyecto = new ConjuntoTarea("Proyecto de Software", "Desarrollar un sistema de gestión de tareas");
    const fase1 = new Tarea('Análisis', 'Realizar el análisis de requisitos', 5);
    const fase2 = new Tarea('Diseño', 'Diseñar la arquitectura del sistema', 8);
    const fase3 = new Tarea('Implementación', 'Desarrollar el sistema', 15);
    const fase4 = new Tarea('Pruebas', 'Realizar pruebas unitarias y de integración', 10);

    proyecto.addTarea(fase1);
    proyecto.addTarea(fase2);
    proyecto.addTarea(fase3);
    proyecto.addTarea(fase4);

    console.log("Detalles del proyecto:");
    proyecto.print();
}