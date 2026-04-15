import { Combo } from "../combo"
import { ProductSimple } from "../product-simple";

export const tiendaComposite = () => {
    const comboMax = new Combo('ComboMax', 'Un combo con varios productos para estudiantes y oficina');
    const combo = new Combo('ComboEstudiante', 'Tinene un cuaderno, un lapiz y una goma');
    const comboOficina = new Combo('ComboOficina', 'Tinene un paquete de hojas, impresora y una grapadora');

    const cuaderno = new ProductSimple('Cuaderno', 3000, 'Un cuaderno de 100 hojas');
    const lapiz = new ProductSimple('Lapiz', 1000, 'Un lapiz de grafito');
    const goma = new ProductSimple('Goma', 500, 'Una goma de borrar');

    combo.addProduct(cuaderno);
    combo.addProduct(lapiz);
    combo.addProduct(goma);

    const paqueteHojas = new ProductSimple('Paquete de Hojas', 2000, 'Un paquete de 500 hojas');
    const impresora = new ProductSimple('Impresora', 150000, 'Una impresora multifuncional');
    const grapadora = new ProductSimple('Grapadora', 25000, 'Una grapadora de escritorio');

    comboOficina.addProduct(paqueteHojas);
    comboOficina.addProduct(impresora);
    comboOficina.addProduct(grapadora);

    const regla = new ProductSimple('Regla', 1500, 'Una regla de 30 cm');

    comboMax.addProduct(combo);
    comboMax.addProduct(comboOficina);
    comboMax.addProduct(regla);

    console.log('Detalles del combo:');
    comboMax.getDetails();
}