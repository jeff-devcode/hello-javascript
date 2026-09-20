/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
function myFunction(){
    function anotherFuncion(){
        console.log("funcion que retorna otra función.");
    }
    anotherFuncion();
}

myFunction();

// 2. Implementa una función currificada que multiplique 3 números
function mult(...numbers) {
    let result = 1
    for (let number of numbers) {
        result *= number
    }
    return result
}

// console.log(mult(1,2,3));
function curryMult(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return mult(a, b, c, d)
            }
        }
    }
}
const multAB = curryMult(1)(2)
const multC = multAB(3)
console.log(multC(3))
console.log(multC(4))


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exp) {
    if (exp == 0) {
        return 1
    }
    
    return base * potencia(base, exp - 1)
}

console.log(potencia(2, 2))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(num) {
    let n = num

    return myObject = {
        increment: function () {
            return n++;
        },
        decrement: function () {
            return n--;
        }, 
        getValue: function () {
            console.log('valor de n: ', n);;
        } 

    }
}

const counter = createCounter(6)
counter.increment()
counter.increment()
counter.getValue()
console.log(counter.increment())
console.log(counter.increment());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers){
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum * multiplier;
}

console.log(sumManyTimes(2, 1,2,3,4))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})

// 7. Desarrolla una función parcial
function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// 8. Implementa un ejemplo que haga uso de Spread
const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

// 9. Implementa un retorno implícito
const getValue = (value) => value;
console.log('retorno implicito: ', getValue(2));

// 10. Haz uso del this léxico
const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting(); 