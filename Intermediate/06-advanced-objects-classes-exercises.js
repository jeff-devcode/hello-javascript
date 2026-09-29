/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
let user = {
    name: "Brais",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(user.__proto__);


// 2. Crea un objeto que herede de otro
let programmer = Object.create(user)
programmer.language = "JavaScript"

programmer.name = "MoureDev"
// console.log(person.name)
// console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
// programmer.sayAge()

// 3. Define un método de instancia en un objeto
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Brais", 37)
newPerson.greet()

// 4. Haz uso de get y set en un objeto
class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)


// 5. Utiliza la operación assign en un objeto
let personCore = { name: "Brais" }
let personDetails = { age: 37, alias: "MoureDev" }

let personComplete = Object.assign(personCore, personDetails)
console.log(personComplete)

// 6. Crea una clase abstracta
class AbstractPerson {
    constructor(name, age) {
        if (this.constructor === AbstractPerson) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
        this.age = age
    }

    greet() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

class Student extends AbstractPerson {
    greet() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`)
    }
}

const student = new Student("Brais", 37)
console.log(student)
student.greet()

// 7. Utiliza polimorfismo en dos clases diferentes
class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} hace un sonido`)
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} ladra`)
    }
}

const dog = new Dog("Firulais")
dog.speak() // Firulais ladra

// 8. Implementa un Mixin
const canEat = {
    eat() {
        console.log(`${this.name} está comiendo`)
    }
}

class Cat {
    constructor(name) {
        this.name = name
    }
}

Object.assign(Cat.prototype, canEat)

// 9. Crea un Singleton
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this
    }
}

const singleton1 = new Singleton()
const singleton2 = new Singleton()
console.log(singleton1 === singleton2) // true


// 10. Desarrolla un Proxy
const target = {
    name: "Brais",
    age: 37
}

const handler = {
    get: function (obj, prop) {
        if (prop in obj) {
            return obj[prop]
        } else {
            return `La propiedad ${prop} no existe`
        }
    }
}

const proxy = new Proxy(target, handler)

console.log(proxy.name) // Brais
console.log(proxy.age) // 37
console.log(proxy.alias) // La propiedad alias no existe

