/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
console.log("EJERCICIO 1.-------------------------")
let numbers = [1, 2, 3, 4, 5, 6, 0, 10, 15, 6, 8, 9, 12, 14, 16, 18, 20]

// map
let doubled = numbers.map(element => element ** 2)
console.log(doubled)

// filter
let impares = numbers.filter(element => element % 3 === 0)
console.log(impares)

// reduce
let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
console.log("EJERCICIO 2.-------------------------")
let cubedEvens = numbers.map(element => element ** 3).filter(element => element % 2 === 0)
console.log(cubedEvens)


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
console.log("EJERCICIO 3.-------------------------")
let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)
console.log(flatArray.flatMap(element => [element, element * 10]))

// 4. Ordena un array de números de mayor a menor 
console.log("EJERCICIO 4.-------------------------")
ordered = numbers.sort((a, b) => b - a)
console.log(ordered)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
console.log("EJERCICIO 5.-------------------------")
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([4, 5, 6, 7]);

union = new Set([...setA, ...setB]);
intersection = new Set([...setA].filter(x => setB.has(x)));
difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(union)
console.log(intersection)
console.log(difference)

// 6. Itera los resultados del ejercicio anterior
console.log("EJERCICIO 6.-------------------------")
for(const element of union) {
    console.log(element)
}
console.log("\n");

[...intersection].forEach(element => console.log(element))

console.log("\n");
Array.from(difference).forEach(element => console.log(element))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
console.log("EJERCICIO 7.-------------------------")
let myMap = new Map([
    ["user1", { name: "Alice", age: 25, email: "alice@mail.com" }],
    ["user2", { name: "Bob", age: 30, email: "bob@mail.com" }],
    ["user3", { name: "Charlie", age: 17, email: "charlie@mail.com" }],
]);

myMap.forEach((value, key) => console.log(`${key}: ${value.name}, ${value.age}, ${value.email}`))

// 8. Dado el mapa anterior, crea un array con los nombres
console.log("EJERCICIO 8.-------------------------")
const arrayOfNames = [...myMap.values()].map(user => user.name)
console.log(arrayOfNames)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
console.log("EJERCICIO 9.-------------------------")
const setOfAdultEmails = new Set(
    [...myMap.values()]
        .filter(user => user.age >= 18)
        .map(user => user.email)
)
console.log(setOfAdultEmails)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
console.log("EJERCICIO 10.-------------------------")
mapToObject = Object.fromEntries(myMap)
console.log(mapToObject)
objectToMap = new Map(Object.entries(mapToObject).map(([key, value]) => [value.email, value]))
console.log(objectToMap)