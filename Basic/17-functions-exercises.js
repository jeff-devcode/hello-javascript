/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b){
    return a + b;
}
console.log(suma(5, 7));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function maxArray(array){
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}
let myArray = [5, 10, 7];
console.log(maxArray(myArray));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let funcString = (string) => {
    let vocales = 'aeiou';
    let cantVocales = 0
    for (let i = 0; i < string.length; i++) {
        if(vocales.includes(string[i])){
            cantVocales++;
        }
    }
    console.log(`La cantidad de vocales contenidas en el string ${string} es de: ${cantVocales}`);
}

funcString('supercalifrajilisticoespialidoso');

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let stringMayus = function name(arrayString) {
    let newArrayString = [];
    for (let i = 0; i < arrayString.length; i++) {
        let upperString = arrayString[i].toUpperCase();
        newArrayString.push(upperString);
    }
    console.log(newArrayString);
}

let arrayString = ['piedra', 'papel', 'tijeras'];
stringMayus(arrayString)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let esPrimo = (num) => {
    if(num <= 1){
        return false;
    }

    let divisores = 0;

    for (let i = 0; i <= num; i++) {
        if(num % i == 0){
            divisores++;
        }
    }

    return divisores == 2;
}

let num = 30;
let result = esPrimo(num) ? `El numero ${num} es primo` : `El numero ${num} NO es primo`; 
console.log(result);


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let commonArrays = (array1, array2) => {
    newArray = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]){
                newArray.push(array1[i]);
                break;
            }
        }        
    }

    // otra alternativa
    // for(let i = 0; i < array1.length; i++){
    //     if(array2.includes(array1[i])){
    //         elementosComunes.push(array1[i]);
    //         //console.log(elementosComunes);
    //     }
    // }
    
    return newArray;
}

myArray1 = [10, 20, 30, 40, 50];
myArray2 = [40, 50, 60, 90, 100, 10];

console.log(commonArrays(myArray1, myArray2));


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaArrayPares(arrayNums){
    sumaPares = 0;
    for (const element of arrayNums) {
        if(element % 2 == 0){
            sumaPares += element;
        }
    }
    return sumaPares;
}

myArray = [10, 20, 3, 40, 15, 30]
console.log(sumaArrayPares(myArray));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const arrayAlCuadrado = (arrayNums) => {
    let newArray = [];
    for(let element of arrayNums){
        newArray.push(element**2);
    }
    return newArray;
}

let arrayNums = [10, 3, 5, 7, 9]
console.log(arrayAlCuadrado(arrayNums));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let stringInvertido = (string) => {
    let arrayString = string.split(" ");
    let newString = [];

    // alternativa con bucle
    // for(let element of arrayString){
    //     newString.unshift(element);
    // }
    // return newString.join(" ");

    return arrayString.reverse().join(" ");
}

let myString = "¿Qué es mejor? ¿Nacer bueno o vencer tu naturaleza maligna con un gran esfuerzo?"
console.log(stringInvertido(myString));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(num){
    fact = 1;
    let i = 1;
    while(i <= num){
        fact *= i
        i++
    }

    return fact;
}

console.log(factorial(5));