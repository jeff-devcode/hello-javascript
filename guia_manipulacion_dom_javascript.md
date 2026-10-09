# Guía Completa de Manipulación del DOM en JavaScript

El **DOM** (*Document Object Model* o Modelo de Objetos del Documento) es una interfaz de programación que representa un documento HTML o XML como un árbol de nodos y objetos. JavaScript utiliza el DOM para leer, alterar, agregar o eliminar elementos de una página web en tiempo real sin necesidad de recargar la página.

---

## 1. Selección de Elementos del DOM

Para interactuar con un elemento HTML, primero debes seleccionarlo e importar su referencia hacia JavaScript.

### Métodos Tradicionales

#### `document.getElementById(id)`
* **Para qué sirve:** Selecciona un único elemento mediante el valor exacto de su atributo `id`.
* **Cómo se usa:** Devuelve un único elemento o `null` si no existe.

```html
<h1 id="titulo-principal">Hola Mundo</h1>
```
```javascript
const titulo = document.getElementById('titulo-principal');
console.log(titulo); // <h1 id="titulo-principal">Hola Mundo</h1>
```

#### `document.getElementsByClassName(clase)` y `document.getElementsByTagName(etiqueta)`
* **Para qué sirve:** Selecciona múltiples elementos que compartan la misma clase CSS o nombre de etiqueta HTML.
* **Cómo se usa:** Devuelve una colección HTML (*HTMLCollection*) viva. Para manipularlos iterativamente, conviene convertirlos a un Array o usarlos con un ciclo `for`.

```html
<p class="texto">Párrafo 1</p>
<p class="texto">Párrafo 2</p>
```
```javascript
const parrafos = document.getElementsByClassName('texto');

// Convertir a Array para usar métodos como forEach
Array.from(parrafos).forEach(p => console.log(p.textContent));
```

---

### Métodos Modernos (Recomendados)

#### `document.querySelector(selectorCSS)`
* **Para qué sirve:** Selecciona el **primer** elemento que coincida con un selector CSS válido (id, clase, etiqueta, atributo, etc.).
* **Cómo se usa:** Devuelve el elemento encontrado o `null`.

```javascript
const primerBoton = document.querySelector('.btn-primary');
const menu = document.querySelector('#nav-main > ul');
```

#### `document.querySelectorAll(selectorCSS)`
* **Para qué sirve:** Selecciona **todos** los elementos que coincidan con el selector CSS.
* **Cómo se usa:** Devuelve una `NodeList` estática, la cual sí posee el método `.forEach()` integrado.

```html
<ul class="lista">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
</ul>
```
```javascript
const items = document.querySelectorAll('.lista .item');

items.forEach((item, index) => {
  console.log(`Elemento ${index + 1}: ${item.textContent}`);
});
```

---

## 2. Modificación del Contenido

Una vez seleccionado un elemento, puedes cambiar su contenido textual o estructura interna de marcas HTML.

### `textContent` vs `innerText` vs `innerHTML`

* `textContent`: Obtiene o modifica el texto de un elemento, incluyendo elementos ocultos y sin interpretar etiquetas HTML. Es el método más seguro y de mejor rendimiento para texto plano.
* `innerText`: Similar a `textContent`, pero respeta los estilos CSS (no devuelve texto oculto por `display: none`) y fuerza un renderizado (*reflow*).
* `innerHTML`: Permite leer o parsear cadenas de texto interpretando etiquetas HTML. **Atención:** Usarlo con datos ingresados por el usuario puede generar vulnerabilidades de seguridad (*Cross-Site Scripting* o XSS).

```html
<div id="contenedor"></div>
```

```javascript
const contenedor = document.getElementById('contenedor');

// Insertar solo texto plano (Seguro)
contenedor.textContent = 'Este es un texto sin formato HTML.';

// Insertar elementos HTML (Usar con precaución)
contenedor.innerHTML = `
  <h2>Subtítulo dinámico</h2>
  <p>Párrafo generado desde <strong>JavaScript</strong>.</p>
`;
```

---

## 3. Manipulación de Atributos y Clases CSS

### Atributos HTML (`getAttribute`, `setAttribute`, `removeAttribute`, `hasAttribute`)

* **Para qué sirve:** Permite leer, cambiar o eliminar cualquier atributo estándar o personalizado (`src`, `href`, `data-*`, `disabled`, etc.).

```html
<img id="mi-imagen" src="foto1.jpg" alt="Imagen inicial">
```

```javascript
const img = document.getElementById('mi-imagen');

// Leer atributo
console.log(img.getAttribute('src')); // "foto1.jpg"

// Cambiar o agregar atributo
img.setAttribute('src', 'foto2.jpg');
img.setAttribute('alt', 'Nueva descripción');

// Comprobar existencia
if (img.hasAttribute('alt')) {
  console.log('El elemento tiene un texto alternativo.');
}

// Eliminar atributo
img.removeAttribute('alt');
```

---

### Clases CSS (`classList`)

Es la forma óptima y limpia de gestionar clases de un elemento sin sobreescribir la propiedad `className`.

* `classList.add('clase')`: Añade una o más clases.
* `classList.remove('clase')`: Elimina una o más clases.
* `classList.toggle('clase')`: Si la clase existe la quita; si no existe, la añade.
* `classList.contains('clase')`: Devuelve `true` o `false` según la existencia de la clase.

```html
<button id="btn-toggle" class="btn">Haz Clic</button>
```

```javascript
const boton = document.getElementById('btn-toggle');

// Agregar y quitar clases
boton.classList.add('btn-dark', 'sombra');
boton.classList.remove('btn');

// Alternar estados (útil para modos oscuros, menús desplegables)
boton.classList.toggle('activo');

// Validar clase
if (boton.classList.contains('activo')) {
  console.log('El botón está en estado activo');
}
```

---

## 4. Estilos Directos (CSS en Línea)

Se puede acceder a los estilos en línea mediante la propiedad `.style`. Nota que en JavaScript las propiedades compuestas de CSS usan formato *camelCase* (`background-color` se transforma en `backgroundColor`).

```javascript
const tarjeta = document.querySelector('.card');

tarjeta.style.backgroundColor = '#f4f4f4';
tarjeta.style.padding = '20px';
tarjeta.style.borderRadius = '8px';
tarjeta.style.display = 'none'; // Ocultar elemento
```

---

## 5. Creación, Inserción y Eliminación de Nodos

### Creación e Inserción

1. `document.createElement(etiqueta)`: Crea un nodo de elemento en memoria.
2. `appendChild(nodo)`: Inserta el nodo al final de la lista de hijos del elemento padre.
3. `append(...nodos O texto)`: Método moderno que permite insertar múltiples nodos o cadenas de texto.
4. `prepend(...nodos O texto)`: Inserta nodos al inicio del elemento padre.
5. `insertBefore(nuevoNodo, nodoReferencia)`: Inserta un nodo justo antes del nodo de referencia.

```html
<ul id="lista-tareas">
  <li>Tarea 1</li>
</ul>
```

```javascript
const lista = document.getElementById('lista-tareas');

// 1. Crear el elemento
const nuevaTarea = document.createElement('li');

// 2. Asignar contenido y atributos
nuevaTarea.textContent = 'Tarea 2 (Agregada dinámicamente)';
nuevaTarea.classList.add('item-pendiente');

// 3. Insertar en el DOM
lista.appendChild(nuevaTarea); // Se añade al final

// Crear e insertar al inicio
const tareaUrgente = document.createElement('li');
tareaUrgente.textContent = 'Tarea Urgente (Inicio)';
lista.prepend(tareaUrgente);
```

#### `insertAdjacentHTML(posición, cadenaHTML)`
* **Para qué sirve:** Inserta un texto parseado a HTML en una posición específica respecto al elemento objetivo sin destruir los event listeners de los hijos existentes.
* **Posiciones válidas:** `'beforebegin'`, `'afterbegin'`, `'beforeend'`, `'afterend'`.

```javascript
const caja = document.querySelector('.caja');

// Se inserta dentro de la caja, como su primer hijo
caja.insertAdjacentHTML('afterbegin', '<p>Texto al inicio de la caja</p>');
```

---

### Eliminación de Nodos

* `elemento.remove()`: Elimina el elemento directamente del DOM (Método moderno).
* `padre.removeChild(hijo)`: Elimina un nodo hijo específico a través de su elemento padre (Método tradicional).

```javascript
const elementoAEliminar = document.querySelector('.alerta');

// Eliminación directa
elementoAEliminar.remove();

// Eliminación tradicional
const lista = document.querySelector('ul');
const primerHijo = lista.firstElementChild;
lista.removeChild(primerHijo);
```

---

## 6. Manejo de Eventos (`EventListener`)

Los eventos permiten que JavaScript reaccione a interacciones del usuario (clicks, desplazamientos, presionar teclas, envío de formularios, etc.).

### `addEventListener(evento, funcionCallback)`

```html
<button id="mi-boton">Guardar Cambios</button>
```

```javascript
const btn = document.getElementById('mi-boton');

function manejarClick(event) {
  console.log('Evento detectado:', event.type);
  console.log('Elemento cliqueado:', event.target);
}

// Asignar escuchador
btn.addEventListener('click', manejarClick);

// Remover escuchador (Requiere que la función callback tenga nombre)
// btn.removeEventListener('click', manejarClick);
```

### Prevenir Comportamiento por Defecto y Propagación

* `event.preventDefault()`: Detiene el comportamiento predeterminado del navegador (por ejemplo, evitar que un formulario recargue la página o que un enlace dirija a una URL).
* `event.stopPropagation()`: Detiene la fase de propagación (*bubbling*) del evento hacia los elementos padres.

```html
<form id="mi-formulario">
  <input type="text" id="nombre" placeholder="Tu nombre">
  <button type="submit">Enviar</button>
</form>
```

```javascript
const formulario = document.getElementById('mi-formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recargar la página

  const nombre = document.getElementById('nombre').value;
  console.log(`Formulario procesado para: ${nombre}`);
});
```

---

### Delegación de Eventos (*Event Delegation*)

Es una técnica de optimización que consiste en asignar un solo `EventListener` a un elemento padre en lugar de asignar múltiples escuchadores a cada uno de los elementos hijos. Utiliza el concepto de *Event Bubbling*.

```html
<ul id="lista-dinamica">
  <li>Elemento A</li>
  <li>Elemento B</li>
  <li>Elemento C</li>
</ul>
```

```javascript
const lista = document.getElementById('lista-dinamica');

// Escuchamos el click en el padre 'ul'
lista.addEventListener('click', (event) => {
  // Verificamos si el elemento realmente cliqueado fue un <li>
  if (event.target.tagName === 'LI') {
    console.log(`Hiciste click en: ${event.target.textContent}`);
    event.target.classList.toggle('completado');
  }
});
```

---

## 7. Recorrido del DOM (*DOM Traversal*)

Consiste en desplazarse por la jerarquía de nodos (padres, hijos y hermanos) a partir de un elemento de referencia.

```html
<div class="padre">
  <p class="hijo-1">Primer hijo</p>
  <p class="hijo-2">Segundo hijo</p>
</div>
```

```javascript
const hijo2 = document.querySelector('.hijo-2');

// 1. Ir hacia arriba (Padres)
const padre = hijo2.parentElement; 
const ancestroCercano = hijo2.closest('.padre'); // Busca el ancestro CSS más cercano

// 2. Ir hacia los lados (Hermanos)
const hermanoAnterior = hijo2.previousElementSibling; // <p class="hijo-1">
const hermanoSiguiente = hijo2.nextElementSibling;     // null (no hay más)

// 3. Ir hacia abajo (Hijos desde el padre)
const primerHijo = padre.firstElementChild; // <p class="hijo-1">
const todosLosHijos = padre.children;        // HTMLCollection con ambos <p>
```

---

## 8. Rendimiento y Buenas Prácticas

### Uso de `DocumentFragment`

Cuando se insertan múltiples elementos al DOM mediante un bucle, cada inserción directa al documento provoca un recálculo de diseño (*Reflow*) y un redibujado (*Repaint*). Un `DocumentFragment` sirve como un contenedor temporal en memoria fuera del DOM real.

```javascript
const lista = document.getElementById('lista-tareas');
const fragmento = document.createDocumentFragment();

const tecnologías = ['JavaScript', 'React', 'Node.js', 'CSS3', 'HTML5'];

tecnologías.forEach(tech => {
  const li = document.createElement('li');
  li.textContent = tech;
  
  // Agregamos al fragmento en memoria, no al DOM directo
  fragmento.appendChild(li);
});

// Se realiza UNA SOLA modificación al DOM real
lista.appendChild(fragmento);
```

---

## Resumen de Métodos Más Usados

| Categoría | Método / Propiedad | Función Principal |
| :--- | :--- | :--- |
| **Selección** | `querySelector()` | Selecciona el primer elemento que coincide con un selector CSS. |
| **Selección** | `querySelectorAll()` | Selecciona todos los elementos que coinciden con un selector CSS. |
| **Contenido** | `textContent` | Asigna o lee texto plano de forma segura. |
| **Contenido** | `innerHTML` | Asigna o lee HTML estructurado en formato de texto. |
| **Clases** | `classList.toggle()` | Activa o desactiva una clase de un elemento. |
| **Creación** | `document.createElement()` | Crea una nueva etiqueta HTML en memoria. |
| **Inserción** | `appendChild()` / `append()` | Inserta un nodo dentro de otro nodo padre. |
| **Eliminación** | `element.remove()` | Elimina un nodo directamente de la página. |
| **Eventos** | `addEventListener()` | Registra un controlador de eventos sobre un nodo. |