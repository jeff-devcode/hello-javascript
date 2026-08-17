/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let myArray1 = ['pastilla', 'perico', 100, 200];
let [indice0, indice1] = myArray1;
console.log(indice0, indice1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let myArray2 = ['poper', 'papel', 300, 400];
let [indice00 = 50, , , , indiceX = 1000] = myArray2;
console.log(indice00, indiceX);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let programmer = {
    nombre: "Jefferson",
    cargo: "Desarrollador Semi-Senior",
    habilidad: "programador Full-Stack"
}

let {nombre, habilidad} = programmer;
console.log(nombre+ " - "+habilidad);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {nombre: name, cargo: job} = programmer;
console.log(name+ " - "+job);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let objectAnidado = {
    nombre: "Jeferson",
    apellido: "oramas",
    profesion: "Desarrollador Full-Stack",
    skills: {
        backend: ["php", "laravel", "python", "FastApi | Django"],
        frontend: ['javascript', 'react']
    }
}

let {skills: {backend}, skills: {frontend}} = objectAnidado;
console.log(backend, frontend);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray3 = [...myArray1, ...myArray2]
console.log(myArray3);

// 7. Usa propagación para crear una copia de un array
let myArray4 = [...myArray1];
console.log(myArray4);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let newObject = {...programmer, ...objectAnidado};
console.log("\n\n",newObject);

// 9. Usa propagación para crear una copia de un objeto
let newObject1 = programmer;
console.log("\n",newObject1);

// 10. Combina desestructuración y propagación
let comidas = {
    desayuno: "panquecas",
    almuerzo: "pabellon criollo",
    cena: "club house"
}
let {desayuno, cena, persona = {...programmer}} = comidas;

console.log(desayuno, cena, persona);