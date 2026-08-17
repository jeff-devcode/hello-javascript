/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let videogame = {
    name: "The Elder Scroll V: Skyrim",
    category: "Fantasy",
    price: 9.99
}
// 2. Accede y muestra su valor
console.log(videogame);

// 3. Agrega una nueva propiedad
videogame.agePublication = 2011;
console.log(videogame);

// 4. Elimina una de las 3 primeras propiedades
delete videogame.category;
console.log(videogame);

// 5. Agrega una función e invócala
videogame.discount = function(){
    console.log("el videojuego esta en descuento");
}

videogame.discount()

// 6. Itera las propiedades del objeto
for (const key in videogame) {
    console.log(`${key}    => ${videogame[key]}`);
}

// 7. Crea un objeto anidado
let objectAnidado = {
    nombre: "Jeferson",
    apellido: "oramas",
    profesion: "Desarrollador Full-Stack",
    skills: {
        "backend": ["php", "laravel", "python", "FastApi | Django"],
        "frontend": ['javascript', 'react']
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
for (const element in objectAnidado.skills) {
    console.log(element);
}
console.log(objectAnidado.skills);

// 9. Comprueba si los dos objetos creados son iguales
console.log(objectAnidado == videogame);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objectAnidado != videogame);