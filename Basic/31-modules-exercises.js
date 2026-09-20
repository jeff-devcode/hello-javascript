/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function functionExport(){
    console.info('exportando función')
}

// 2. Exporta una constante
export const PI = 3.1415;

// 3. Exporta una clase
export class MyClass {
    constructor(name){
        this.name = name;
    }

    myName(){
        console.info('mi nombre es: ', this.name);
    }
}

// 4. Importa una función
// import {functionExport} from "./31-modules-exercises.js"

// functionExport();

// 5. Importa una constante

// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior