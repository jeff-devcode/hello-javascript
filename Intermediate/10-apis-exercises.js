/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
function obtenerPublicaciones() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

// obtenerPublicaciones();

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
function obtenerPublicacionesConVerificacion(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if(!response.ok){
                throw new Error("Se jodio too");
                
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

// obtenerPublicacionesConVerificacion();
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function obtenerPublicacionAsincAwait(){
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if(!response.ok){
            throw new Error(`sendo betulio medina angarita - ${response.status}`);
        }

        const data = await response.json();

        // console.log(data);

        for (let i = 0; i < 2; i++) {
            const element = data[i];
            console.log(element);
            
        }
        
    } catch (error) {
        console.log(error);
    }

}

// obtenerPublicacionAsincAwait();

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
const peticionPost = async () => {
    try {
        const datosPost = {
            userId: 20,
            title: "Nuevo post generado.",
            body: "Este post se genero gracias al curso de MoureDev"
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosPost)
        });
        if (!response.ok) {
            throw new Error("error HTTP", response.status);
        }

        const data = await response.json();
        console.info('Datos creados satisfactoriamente!');
        console.log(data);
    } catch (error) {
        console.log('ahora si nos cargo la chingada: ', error);
    }
}

// peticionPost();

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
const peticionPut = async (id) => {
    try {
        const datosPut = {
            userId: 20,
            title: "Post actualizado.",
            body: "Body del post actualizado."
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosPut)
        });
        if (!response.ok) {
            throw new Error("error HTTP", response.status);
        }

        const data = await response.json();
        console.info('Datos actualizados satisfactoriamente!');
        console.log(data);
    } catch (error) {
        console.log('ahora si nos cargo la chingada: ', error);
    }
}

// peticionPut(6);

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
const peticionPatch = async (id) => {
    try {
        const datosPatch = {
            // userId: 20,
            title: "Post actualizado parcialmente.",
            body: "este post se ha actualizado parcialmente con el metodo patch."
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosPatch)
        });
        if (!response.ok) {
            throw new Error("error HTTP", response.status);
        }

        const data = await response.json();
        console.info('Datos parcialmente actualizados satisfactoriamente!');
        console.log(data);
    } catch (error) {
        console.log('ahora si nos cargo la chingada: ', error);
    }
}

// peticionPatch(7);

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
const peticionDelete = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            // headers: {
            //     "Content-Type": "application/json"
            // }
        });
        if (!response.ok) {
            throw new Error("error HTTP", response.status);
        }

        const data = await response.json();
        console.info('Datos eliminados satisfactoriamente!');
        console.log(data);
        // console.log(response);
    } catch (error) {
        console.log('ahora si nos cargo la chingada: ', error);
    }
}

// peticionDelete(7);

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
const peticionGet = async (ciudad) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
            throw new Error("error HTTP", response.status);
        }

        const data = await response.json();
        console.log(data);
        // console.log(response);
    } catch (error) {
        console.log('ahora si nos cargo la chingada: ', error);
    }
}

peticionGet(7);

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
