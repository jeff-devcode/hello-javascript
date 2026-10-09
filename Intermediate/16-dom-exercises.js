/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/
document.addEventListener("DOMContentLoaded", () => {
    // 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
    const title = document.getElementById('title');
    title.textContent = "¡Hola Mundo!";

    // 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
    const myImage = document.getElementById('myImage');
    // myImage.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhddvzkL8QugCtRugGj6Gs3tETMcxuHqN15q0QL3KvuckNILeDCBBxDtA&s=10')
    myImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhddvzkL8QugCtRugGj6Gs3tETMcxuHqN15q0QL3KvuckNILeDCBBxDtA&s=10';
    myImage.style.height = '20rem';
    myImage.style.borderRadius = '2rem';

    // 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
    const box = document.getElementById('box');
    box.classList.add('resaltado');
    box.style.backgroundColor = 'aquamarine';
    box.style.width = 'fit-content';
    box.style.borderRadius = '50px';

    box.textContent = 'contenedor resaltado.';


    // 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
    const paragraph = document.getElementById('paragraph');
    paragraph.style.color = 'blue';

    // 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
    const btn = document.getElementById('btn');
    const list = document.getElementById('list');

    btn.addEventListener('click', () => {
        const newElement = document.createElement('li');
        newElement.textContent = 'Nuevo Elemento.';

        newElement.addEventListener('click', () => {
            newElement.remove();
        })
        
        list.appendChild(newElement);
    })

    // 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
    const btnDelete = document.getElementById('btnDeleteParagraph');
    const deleteParagraph = document.getElementById('deleteParagraph');

    btnDelete.addEventListener('click', () => {
        deleteParagraph.remove();
    })

    // 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
    const content = document.getElementById('content');
    const newH2 = document.createElement('h2');
    newH2.textContent = 'Nuevo Contenido.';

    // content.innerHTML = `${newH2}`;
    // content.innerHTML = newH2;
    content.innerHTML = "<h2>Nuevo Contenido</h2>"

    // 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
    const greetBtn = document.getElementById('greetBtn');

    greetBtn.addEventListener('click', () => {
        alert('Hola!');
    })

    // 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
    const textInput = document.getElementById('textInput');
    const result = document.getElementById('result');

    textInput.addEventListener('input', () => { // keypress esta deprecado, mejor usar input
        result.textContent = textInput.value;
    })

    // 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
    const btnFondo = document.getElementById('backgroundBtn');
    const body = document.querySelector('body');

    btnFondo.addEventListener('click', () => {
        const r = Math.floor(Math.random()* 256);
        const g = Math.floor(Math.random()* 256);
        const b = Math.floor(Math.random()* 256);
        const a = Math.random();
        // console.log(`rgba(${r},${g},${b}, ${a})`);
        body.style.background = `rgba(${r},${g},${b}, ${a})`; 
    })

})