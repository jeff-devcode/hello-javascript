/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Televisor {
    constructor(marca, pulgadas){
        this.marca = marca;
        this.pulgadas = pulgadas;
    }
}
let objTv = new Televisor("Hyundai", 45);
console.log(objTv);

// 2. Añade un método a la clase que utilice las propiedades
class Telefono {
    constructor(marca, camara, pulgadas){
        this.marca = marca;
        this.camara = camara;
        this.pulgadas = pulgadas;
    }

    tomarFoto(){
        console.log(`El telefono de ${this.camara} pixeles tomo una foto.`);
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let miTelefono = new Telefono('Samsung', 200, 7);
console.log(miTelefono.camara, "-", miTelefono.marca, "-", miTelefono.pulgadas);
miTelefono.tomarFoto();

// 4. Añade un método estático a la primera clase
class Televisor1 {
    constructor(marca, pulgadas){
        this.marca = marca;
        this.pulgadas = pulgadas;
    }

    static encender(){
        console.log("el televisor se esta encencidendo");
    }
}

// 5. Haz uso del método estático
Televisor1.encender();

// 6. Crea una clase que haga uso de herencia
class Audifonos {
    constructor(marca, calidad, precio){
        this.marca = marca;
        this.calidad = calidad;
        this.precio = precio;
    }

    escucharMusica(){
        console.log(`Se esta escuchando musica de los audifonos`);
    }
}

class inEar extends Audifonos{
    constructor(marca, calidad, precio){
        super(marca);
        super(calidad);
        super(precio);
    }
}

// 7. Crea una clase que haga uso de getters y setters
class Dragon {
    #name
    #size
    #age
    #type
    constructor(name, size, age, type){
        this.#name = name;
        this.#size = size;
        this.#age = age;
        this.#type = type;
    }

    get name(){
        return this.#name;
    }

    get type(){
        return this.#type;
    }

    get age(){
        return this.#age;
    }
    set age(age){
        this.#age = age
    }
}

let myDragon = new Dragon('Alduin', 20, 1000, 'Dragon Legendario');
console.log(myDragon.name);
myDragon.age = 5000;
console.log(myDragon.age);

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Magician {
    #name
    #level
    #skill
    constructor(name, level, skill){
        this.#name = name;
        this.#level = level;
        this.#skill = skill;
        
    }

    get name(){
        return this.#name;
    }

    get skill(){
        return this.#skill;
    }
    set skill(skill){
        this.#skill = skill
    }
}

let myMagician = new Magician('Mago Maestro', 150, "Destruction");

// 9. Utiliza los get y set y muestra sus valores
console.log(myMagician.name);
console.log(myMagician.skill);
myMagician.skill = "Conjuration";
console.log(myMagician.skill);

// 10. Sobrescribe un método de una clase que utilice herencia 
class Dovahkiin extends Magician {
    constructor(name, level, skill, transformation){
        super(name, level, skill);
        this.transformation = transformation;
    }
}

let dragonBorn = new Dovahkiin('Yexael', 200, "All", "Werewolf");
console.log(dragonBorn.name);