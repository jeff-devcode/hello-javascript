/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
// for (let index = 1; index <= 20; index++) {
//     console.log(index);
    
// }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
/* let i = 1
let suma = 0;
while(i <= 100){
    suma += i
    console.log(suma);
    i++
} */

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

/* for (let i = 1; i <= 50; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
}
 */
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
// let nombres = ['Newton', 'Tesla', 'Einstein', 'Galileo', 'Turin']
// for (let i = 0; i < nombres.length; i++) {
//     const element = nombres[i]
//     console.log(element);
// }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
/* let vocales = 'aeiou';
let cantVocales = 0;
let cadenaTexto = 'No hay cama para tanta gente.'

for (let i = 0; i < cadenaTexto.length; i++) {
    if(vocales.includes(cadenaTexto[i])){
        cantVocales++;
    }
}
console.log(`La cantidad de vocales en la cadena de texto es de ${cantVocales}`); */

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
/* let myArray = [3,5,7,1,9];
let mult = 1;

for (let i = 0; i < myArray.length; i++) {
    mult *= myArray[i];
}
console.log(mult); */

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
/* for (let i = 1; i <= 10; i++) {
    tabla5 = 5 * i;
    console.log(`5 x ${i} = ${tabla5}`);
}
 */
// 8. Usa un bucle para invertir una cadena de texto
let cadenaTexto = 'No hay cama para tanta gente.'
let arrayCadena = cadenaTexto.split('');
let cadenaInvertida = [];

for (let i = 0; i < cadenaTexto.length; i++) {
    cadenaInvertida.unshift(arrayCadena[i]);
}
// de array a string
cadenaInvertida = cadenaInvertida.join('');
console.log(cadenaInvertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let myArray = [3, 15, 7, 12, 9, 20];
let mayoresA10 = [];
for (let i = 0; i < myArray.length; i++) {
    if(myArray[i] > 10){
        mayoresA10.push(myArray[i]);
    }
}
console.log(mayoresA10);