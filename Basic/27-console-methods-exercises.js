/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function errorFunction(){
    console.error('Mensaje de error')
}
errorFunction();

// 2. Crea una función que utilice warn correctamente
function warnFuntion(){
    console.warn("Mensaje de Advertencia")
}

warnFuntion();

// 3. Crea una función que utilice info correctamente
function infoFuntion(){
    console.info("Mensaje de información")
}

infoFuntion();

// 4. Utiliza table
let person = {
    nombre: "Jeferson",
    apellido: "Oramas",
    edad: 26,
    sexo: "Masculino",
}

console.table(person);

// 5. Utiliza group
console.group('Grupo:')
console.info('a');
console.info('ver');
console.info('que');
console.info('se');
console.info('cuece')


// 6. Utiliza time
console.time('tiempo');

for (let index = 0; index < 10000; index++) {
    const element = index;
}

console.timeEnd('tiempo');

// 7. Valida con assert si un número es positivo
let num = -35;

console.assert(num > 0, "El número debe ser positivo");

// 8. Utiliza count
console.count('hola')
console.count('hola')
console.count('hola')
console.count('hola')
console.count('hola')
console.count('hola')

// 9. Utiliza trace
console.trace();

// 10. Utiliza clear
console.clear()