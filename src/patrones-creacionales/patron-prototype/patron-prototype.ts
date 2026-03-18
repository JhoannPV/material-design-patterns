import { Saiyajin } from "./class-saiyajin"
import { Tecnica } from "./class-tecnicas";

export const patronPrototype = () => {
    const tecnicasGoku: Tecnica[] = [
        new Tecnica('Kamehameha', 10000),
        new Tecnica('Teletransportacion', 0),
        new Tecnica('Kaioken', 20000),
        new Tecnica('Taioken', 0),
        new Tecnica('Kienzan', 50000),
        new Tecnica('Genkidama', 1000000),
    ];

    const goku = new Saiyajin()
        .setNombre('Goku')
        .setPoder(9000)
        .setTransformacion('Super Saiyajin')
        .setClase('Guerrero')
        .setColorCabello('Dorado')
        .setConCola(false)
        .setTecnicas(tecnicasGoku)
        .build();

    const goku2 = goku
        .clone()
        .setNombre('Goku Ultra Instinto')
        .setPoder(1000000)
        .setTransformacion('Ultra Instinto')
        .setColorCabello('Plateado')
        .setTecnicas([
            ...goku.getData().tecnicas,
            new Tecnica('Migatte no Gokui', 2000000),
        ])
        .build();

    console.log('Goku Base:', goku.getData());
    console.log('Goku Ultainstinto:', goku2.getData());

}