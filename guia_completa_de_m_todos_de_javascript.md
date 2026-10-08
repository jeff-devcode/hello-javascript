# Guía práctica de métodos de JavaScript

Una guía de consulta para aprender qué hacen algunos métodos frecuentes, qué devuelven y cuándo conviene usarlos. Los ejemplos usan JavaScript moderno; los que dependen del navegador están identificados como tales.

> **Importante:** esta es una selección de métodos útiles, no un catálogo completo del lenguaje. Los métodos disponibles pueden depender de la versión de JavaScript y del entorno (navegador o Node.js).

## Índice

- [Cómo leer esta guía](#cómo-leer-esta-guía)
- [1. Métodos de arreglos](#1-métodos-de-arreglos-array)
  - [Transformar e iterar](#transformar-e-iterar)
  - [Buscar y comprobar](#buscar-y-comprobar)
  - [Modificar arreglos](#modificar-arreglos)
  - [Crear copias, cortar y combinar](#crear-copias-cortar-y-combinar)
- [2. Métodos de cadenas de texto](#2-métodos-de-cadenas-de-texto-string)
- [3. Métodos de objetos](#3-métodos-de-objetos-object)
- [4. Métodos matemáticos](#4-métodos-matemáticos-math)
- [5. Métodos de funciones](#5-métodos-de-funciones-function)
- [6. Métodos de promesas](#6-métodos-de-promesas-promise)
- [7. Almacenamiento web](#7-almacenamiento-web-localstorage-y-sessionstorage)
- [8. Colecciones: Map y Set](#8-colecciones-map-y-set)
- [Comparaciones rápidas](#comparaciones-rápidas)
- [Ejercicios para practicar](#ejercicios-para-practicar)

## Cómo leer esta guía

Cada método incluye una explicación breve, lo que devuelve y, cuando corresponde, si modifica el valor original. Los ejemplos muestran el resultado esperado en un comentario.

Los niveles son orientativos:

- **Básico:** conviene aprenderlo al empezar.
- **Intermedio:** útil cuando ya se conocen arreglos, objetos y funciones.
- **Avanzado:** requiere familiaridad con conceptos como acumuladores, `this` o asincronía.

En los métodos de arreglos:

- **Modifica el original: Sí** significa que el método cambia el mismo arreglo.
- **Modifica el original: No** significa que devuelve un resultado nuevo y deja intacto el arreglo original. En algunos casos, la copia es superficial: los objetos internos siguen siendo referencias compartidas.

---

## 1. Métodos de arreglos (`Array`)

### Transformar e iterar

#### `map()` — Básico

- **Qué hace:** aplica una función a cada elemento y reúne los resultados en un arreglo nuevo.
- **Devuelve:** un arreglo con la misma cantidad de elementos que el original.
- **Modifica el original:** No.
- **Úsalo cuando:** quieras transformar cada elemento, por ejemplo, obtener los nombres de una lista de usuarios.

```javascript
const precios = [10, 20, 30];
const conImpuesto = precios.map(precio => precio * 1.1);

console.log(conImpuesto); // [11, 22, 33]
console.log(precios);     // [10, 20, 30]
```

#### `forEach()` — Básico

- **Qué hace:** ejecuta una función una vez por cada elemento.
- **Devuelve:** `undefined`.
- **Modifica el original:** No por sí solo; la función ejecutada puede cambiar otros datos.
- **Úsalo cuando:** quieras realizar una acción por elemento y no necesites construir un arreglo nuevo.

```javascript
const frutas = ["Manzana", "Pera", "Banano"];
frutas.forEach((fruta, indice) => {
  console.log(`${indice + 1}. ${fruta}`);
});
// 1. Manzana
// 2. Pera
// 3. Banano
```

#### `filter()` — Básico

- **Qué hace:** selecciona los elementos para los que la condición devuelve un valor verdadero.
- **Devuelve:** un arreglo nuevo, posiblemente vacío o más corto que el original.
- **Modifica el original:** No.
- **Úsalo cuando:** necesites obtener los elementos que cumplen una condición.

```javascript
const edades = [12, 18, 25, 8, 30];
const mayoresDeEdad = edades.filter(edad => edad >= 18);

console.log(mayoresDeEdad); // [18, 25, 30]
```

#### `reduce()` — Intermedio

- **Qué hace:** combina los elementos mediante una función acumuladora.
- **Devuelve:** el valor final acumulado, que puede ser un número, una cadena, un objeto u otro tipo.
- **Modifica el original:** No por sí solo; depende de qué haga la función acumuladora.
- **Úsalo cuando:** necesites resumir datos, como sumar importes o contar elementos.

```javascript
const carrito = [{ monto: 10 }, { monto: 20 }, { monto: 30 }];
const total = carrito.reduce((acumulado, item) => acumulado + item.monto, 0);

console.log(total); // 60
```

> **Consejo:** proporciona un valor inicial (en el ejemplo, `0`). Así el resultado también está definido cuando el arreglo está vacío.

#### `reduceRight()` — Avanzado

- **Qué hace:** como `reduce()`, acumula un resultado, pero visita los elementos de derecha a izquierda.
- **Devuelve:** el valor final acumulado.
- **Modifica el original:** No por sí solo.
- **Úsalo cuando:** el orden inverso de acumulación sea importante.

```javascript
const letras = ["a", "b", "c"];
const resultado = letras.reduceRight((acumulado, letra) => acumulado + letra, "");

console.log(resultado); // "cba"
```

#### `flatMap()` — Intermedio

- **Qué hace:** transforma cada elemento y aplana un nivel los arreglos que devuelve la función.
- **Devuelve:** un arreglo nuevo.
- **Modifica el original:** No.
- **Úsalo cuando:** cada elemento pueda producir cero, uno o varios elementos de salida.

```javascript
const frases = ["Hola mundo", "Aprender JS"];
const palabras = frases.flatMap(frase => frase.split(" "));

console.log(palabras); // ["Hola", "mundo", "Aprender", "JS"]
```

#### `flat()` — Intermedio

- **Qué hace:** aplana los arreglos anidados hasta la profundidad indicada. Sin argumento, aplana un nivel.
- **Devuelve:** un arreglo nuevo.
- **Modifica el original:** No.
- **Úsalo cuando:** necesites reducir niveles de anidación.

```javascript
const matriz = [1, [2, [3, 4]]];
const aplanado = matriz.flat(2);

console.log(aplanado); // [1, 2, 3, 4]
```

### Buscar y comprobar

#### `find()` y `findIndex()` — Básico

- **Qué hacen:** buscan de izquierda a derecha el primer elemento que cumple la condición.
- **Devuelven:** `find()` devuelve el elemento o `undefined`; `findIndex()` devuelve el índice o `-1`.
- **Modifican el original:** No.
- **Úsalos cuando:** busques una coincidencia y solo necesites la primera.

```javascript
const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
];

console.log(usuarios.find(usuario => usuario.id === 2));
// { id: 2, nombre: "Luis" }
console.log(usuarios.findIndex(usuario => usuario.id === 2)); // 1
console.log(usuarios.find(usuario => usuario.id === 9)); // undefined
```

#### `findLast()` y `findLastIndex()` — Intermedio

- **Qué hacen:** buscan de derecha a izquierda la última coincidencia.
- **Devuelven:** `findLast()` devuelve el elemento o `undefined`; `findLastIndex()` devuelve el índice original o `-1`.
- **Modifican el original:** No.
- **Úsalos cuando:** te interese la coincidencia más cercana al final del arreglo.

```javascript
const numeros = [5, 12, 50, 130, 44];

console.log(numeros.findLast(numero => numero > 40)); // 44
console.log(numeros.findLastIndex(numero => numero > 40)); // 4
```

> **Compatibilidad:** `findLast()` y `findLastIndex()` son métodos modernos. Comprueba que el navegador o la versión de Node.js que uses los admita.

#### `indexOf()` y `lastIndexOf()` — Básico

- **Qué hacen:** buscan la primera o la última posición de un valor.
- **Devuelven:** el índice encontrado o `-1` si no aparece.
- **Modifican el original:** No.
- **Úsalos cuando:** busques un valor exacto, especialmente un número o una cadena.

```javascript
const letras = ["a", "b", "c", "a"];

console.log(letras.indexOf("a"));     // 0
console.log(letras.lastIndexOf("a")); // 3
console.log(letras.indexOf("z"));     // -1
```

#### `includes()` — Básico

- **Qué hace:** comprueba si un arreglo contiene un valor.
- **Devuelve:** `true` o `false`.
- **Modifica el original:** No.
- **Úsalo cuando:** solo necesites confirmar si existe un valor, sin conocer su posición.

```javascript
const roles = ["admin", "editor"];

console.log(roles.includes("admin")); // true
console.log(roles.includes("invitado")); // false
```

#### `some()` y `every()` — Intermedio

- **Qué hacen:** comprueban condiciones sobre los elementos del arreglo.
- **Devuelven:** `some()` devuelve `true` si al menos uno cumple; `every()` devuelve `true` si todos cumplen.
- **Modifican el original:** No.
- **Úsalos cuando:** necesites validar uno o todos los elementos sin crear un arreglo filtrado.

```javascript
const productos = [{ stock: 10 }, { stock: 0 }];
const notas = [15, 18, 20];

console.log(productos.some(producto => producto.stock === 0)); // true
console.log(notas.every(nota => nota >= 10)); // true
```

> **Nota:** `every()` devuelve `true` para un arreglo vacío: no existe ningún elemento que incumpla la condición.

### Modificar arreglos

#### `push()` y `pop()` — Básico

- **Qué hacen:** `push()` agrega elementos al final; `pop()` elimina y devuelve el último.
- **Devuelven:** `push()` devuelve la nueva longitud; `pop()` devuelve el elemento eliminado o `undefined` si el arreglo está vacío.
- **Modifican el original:** Sí.
- **Úsalos cuando:** agregues o retires elementos del final, como en una pila (LIFO: el último en entrar es el primero en salir).

```javascript
const pila = [1, 2];
const longitud = pila.push(3);
const ultimo = pila.pop();

console.log(longitud); // 3
console.log(ultimo);   // 3
console.log(pila);     // [1, 2]
```

#### `unshift()` y `shift()` — Básico

- **Qué hacen:** `unshift()` agrega elementos al inicio; `shift()` elimina y devuelve el primero.
- **Devuelven:** `unshift()` devuelve la nueva longitud; `shift()` devuelve el elemento eliminado o `undefined` si el arreglo está vacío.
- **Modifican el original:** Sí.
- **Úsalos cuando:** agregues o retires elementos del inicio. Pueden servir para modelar una cola (FIFO: el primero en entrar es el primero en salir).

```javascript
const cola = ["segundo", "tercero"];
const longitud = cola.unshift("primero");
const atendido = cola.shift();

console.log(longitud); // 3
console.log(atendido); // "primero"
console.log(cola);     // ["segundo", "tercero"]
```

#### `splice()` — Intermedio

- **Qué hace:** elimina, reemplaza o inserta elementos en una posición.
- **Devuelve:** un arreglo con los elementos eliminados.
- **Modifica el original:** Sí.
- **Úsalo cuando:** necesites editar el arreglo original en un índice concreto.

```javascript
const items = ["a", "b", "c"];
const eliminados = items.splice(1, 1, "nuevo");

console.log(eliminados); // ["b"]
console.log(items);      // ["a", "nuevo", "c"]
```

#### `sort()` y `reverse()` — Intermedio

- **Qué hacen:** `sort()` ordena los elementos; `reverse()` invierte su orden actual.
- **Devuelven:** el mismo arreglo ya reordenado.
- **Modifican el original:** Sí.
- **Úsalos cuando:** quieras reordenar el arreglo existente.

```javascript
const numeros = [40, 100, 1, 5];
numeros.sort((a, b) => a - b);

console.log(numeros); // [1, 5, 40, 100]
numeros.reverse();
console.log(numeros); // [100, 40, 5, 1]
```

> **Precaución:** sin una función comparadora, `sort()` ordena convirtiendo los elementos a texto. Por eso `[40, 100, 1]` no se ordena numéricamente como quizá esperas. Para números, usa `(a, b) => a - b`.

### Crear copias, cortar y combinar

#### `toSorted()`, `toReversed()`, `toSpliced()` y `with()` — Intermedio

- **Qué hacen:** crean una versión nueva ordenada, invertida, editada o con un elemento reemplazado.
- **Devuelven:** un arreglo nuevo.
- **Modifican el original:** No.
- **Úsalos cuando:** quieras transformar un arreglo sin cambiar el original, por ejemplo, al actualizar estado en una interfaz.

```javascript
const original = [3, 1, 2];
const ordenado = original.toSorted((a, b) => a - b);
const reemplazado = original.with(1, 9);

console.log(original);      // [3, 1, 2]
console.log(ordenado);      // [1, 2, 3]
console.log(reemplazado);   // [3, 9, 2]
console.log(original.toReversed()); // [2, 1, 3]
console.log(original.toSpliced(1, 1, 8)); // [3, 8, 2]
```

> **Compatibilidad:** estos métodos son modernos. Si el entorno de aprendizaje no los reconoce, puedes usar alternativas que copien primero el arreglo, como `[...original].sort((a, b) => a - b)`.

#### `slice()` — Básico

- **Qué hace:** extrae una porción desde el índice inicial hasta antes del índice final.
- **Devuelve:** un arreglo nuevo con una copia superficial de esa porción.
- **Modifica el original:** No.
- **Úsalo cuando:** quieras obtener una sublista sin eliminar elementos del arreglo original.

```javascript
const letras = ["a", "b", "c", "d"];
const sublista = letras.slice(1, 3);

console.log(sublista); // ["b", "c"]
console.log(letras);   // ["a", "b", "c", "d"]
```

#### `concat()` — Básico

- **Qué hace:** une este arreglo con uno o más arreglos o valores.
- **Devuelve:** un arreglo nuevo.
- **Modifica el original:** No.
- **Úsalo cuando:** necesites combinar arreglos sin alterar los existentes.

```javascript
const a = [1, 2];
const b = [3, 4];

console.log(a.concat(b)); // [1, 2, 3, 4]
console.log(a);           // [1, 2]
```

#### `join()` — Básico

- **Qué hace:** une los elementos en una cadena y coloca un separador entre ellos.
- **Devuelve:** una cadena de texto.
- **Modifica el original:** No.
- **Úsalo cuando:** quieras presentar los elementos como texto.

```javascript
const palabras = ["Hola", "Mundo"];

console.log(palabras.join(" ")); // "Hola Mundo"
```

---

## 2. Métodos de cadenas de texto (`String`)

Las cadenas son inmutables: estos métodos devuelven resultados nuevos y no cambian el texto original.

#### `charAt()` y `charCodeAt()` — Intermedio

- **Qué hacen:** consultan la unidad de texto que ocupa un índice.
- **Devuelven:** `charAt()` devuelve una cadena; `charCodeAt()` devuelve un número (la unidad de código UTF-16).
- **Modifican el original:** No.
- **Úsalos cuando:** necesites acceder a una posición concreta o trabajar con unidades de código.

```javascript
const texto = "Hola";

console.log(texto.charAt(0));     // "H"
console.log(texto.charCodeAt(0)); // 72
```

> **Nota:** `charCodeAt()` no siempre representa un carácter Unicode completo. Para recorrer caracteres Unicode, puedes usar `Array.from(texto)` o el operador `for...of`.

#### `includes()`, `startsWith()` y `endsWith()` — Básico

- **Qué hacen:** comprueban si el texto contiene, empieza o termina con otra cadena.
- **Devuelven:** `true` o `false`.
- **Modifican el original:** No.
- **Úsalos cuando:** necesites comprobar la presencia o los extremos de un texto.

```javascript
const url = "https://ejemplo.com/script.js";

console.log(url.includes("ejemplo")); // true
console.log(url.startsWith("https")); // true
console.log(url.endsWith(".js"));     // true
```

#### `slice()` y `substring()` — Básico

- **Qué hacen:** extraen una sección de una cadena, desde el inicio indicado hasta antes del final.
- **Devuelven:** una cadena nueva.
- **Modifican el original:** No.
- **Úsalos cuando:** necesites obtener una parte de un texto.

```javascript
const lenguaje = "JavaScript";

console.log(lenguaje.slice(0, 4));     // "Java"
console.log(lenguaje.slice(-6));       // "Script"
console.log(lenguaje.substring(0, 4)); // "Java"
```

> **Diferencia:** `slice()` admite índices negativos para contar desde el final; `substring()` no los interpreta de esa manera.

#### `toLowerCase()` y `toUpperCase()` — Básico

- **Qué hacen:** convierten el texto a minúsculas o mayúsculas.
- **Devuelven:** una cadena nueva.
- **Modifican el original:** No.
- **Úsalos cuando:** quieras normalizar el uso de mayúsculas, por ejemplo, antes de comparar texto.

```javascript
const saludo = "Hola";

console.log(saludo.toLowerCase()); // "hola"
console.log(saludo.toUpperCase()); // "HOLA"
console.log(saludo);               // "Hola"
```

#### `trim()`, `trimStart()` y `trimEnd()` — Básico

- **Qué hacen:** quitan espacios en blanco al inicio y al final, al inicio solamente o al final solamente.
- **Devuelven:** una cadena nueva.
- **Modifican el original:** No.
- **Úsalos cuando:** limpies entradas de texto antes de validarlas o mostrarlas.

```javascript
const entrada = "   usuario@ejemplo.com   ";

console.log(entrada.trim());      // "usuario@ejemplo.com"
console.log(entrada.trimStart()); // "usuario@ejemplo.com   "
console.log(entrada.trimEnd());   // "   usuario@ejemplo.com"
```

#### `replace()` y `replaceAll()` — Básico

- **Qué hacen:** reemplazan coincidencias por otro texto.
- **Devuelven:** una cadena nueva.
- **Modifican el original:** No.
- **Úsalos cuando:** necesites cambiar una o todas las apariciones de un texto.

```javascript
const texto = "gato perro gato";

console.log(texto.replace("gato", "pez"));    // "pez perro gato"
console.log(texto.replaceAll("gato", "pez")); // "pez perro pez"
```

> `replace()` con una cadena de búsqueda reemplaza la primera coincidencia. Si usas una expresión regular con la bandera `g`, puede reemplazar todas.

#### `split()` — Básico

- **Qué hace:** divide una cadena usando un separador.
- **Devuelve:** un arreglo de cadenas.
- **Modifica el original:** No.
- **Úsalo cuando:** quieras convertir texto delimitado en partes, por ejemplo, separar palabras o campos simples.

```javascript
const registro = "Juan,25,Chile";
const partes = registro.split(",");

console.log(partes); // ["Juan", "25", "Chile"]
```

#### `padStart()` y `padEnd()` — Intermedio

- **Qué hacen:** agregan caracteres al inicio o al final hasta alcanzar una longitud objetivo.
- **Devuelven:** una cadena nueva.
- **Modifican el original:** No.
- **Úsalos cuando:** necesites alinear texto o mostrar números con una longitud fija.

```javascript
const numero = "5";

console.log(numero.padStart(3, "0")); // "005"
console.log(numero.padEnd(3, "0"));   // "500"
```

---

## 3. Métodos de objetos (`Object`)

#### `Object.keys()`, `Object.values()` y `Object.entries()` — Básico

- **Qué hacen:** obtienen las claves, los valores o los pares `[clave, valor]` de las propiedades propias enumerables de un objeto.
- **Devuelven:** arreglos.
- **Modifican el original:** No.
- **Úsalos cuando:** quieras recorrer o inspeccionar las propiedades de un objeto.

```javascript
const usuario = { nombre: "Ana", edad: 20 };

console.log(Object.keys(usuario));   // ["nombre", "edad"]
console.log(Object.values(usuario)); // ["Ana", 20]
console.log(Object.entries(usuario));// [["nombre", "Ana"], ["edad", 20]]
```

#### `Object.fromEntries()` — Intermedio

- **Qué hace:** convierte pares `[clave, valor]` en propiedades de un objeto.
- **Devuelve:** un objeto nuevo.
- **Modifica el original:** No.
- **Úsalo cuando:** quieras convertir entradas de un arreglo o de un `Map` en un objeto.

```javascript
const entradas = [["a", 1], ["b", 2]];
const objeto = Object.fromEntries(entradas);

console.log(objeto); // { a: 1, b: 2 }
```

#### `Object.assign()` — Intermedio

- **Qué hace:** copia propiedades propias enumerables de uno o más objetos de origen a un objeto destino.
- **Devuelve:** el objeto destino.
- **Modifica el original:** Sí, modifica el objeto destino que recibe como primer argumento.
- **Úsalo cuando:** quieras combinar propiedades o copiar propiedades a un objeto.

```javascript
const base = { idioma: "es" };
const preferencias = { tema: "oscuro" };
const combinado = Object.assign({}, base, preferencias);

console.log(combinado); // { idioma: "es", tema: "oscuro" }
console.log(base);      // { idioma: "es" }
```

> **Precaución:** la copia es superficial. Los objetos anidados no se clonan profundamente. Para combinar objetos sencillos también es común usar `{ ...base, ...preferencias }`.

#### `Object.freeze()` y `Object.seal()` — Intermedio

- **Qué hacen:** limitan los cambios permitidos sobre un objeto.
- **Devuelven:** el mismo objeto.
- **Modifican el original:** Sí, cambian sus restricciones.
- **Úsalos cuando:** quieras impedir cambios estructurales o proteger una configuración sencilla.

```javascript
const config = { api: "v1" };
Object.freeze(config);

config.api = "v2";
console.log(config.api); // "v1" en modo no estricto
```

| Método | Cambiar propiedades existentes | Agregar o eliminar propiedades |
|---|---|---|
| `Object.freeze()` | No | No |
| `Object.seal()` | Sí | No |

> **Precaución:** ambos son superficiales: un objeto anidado puede seguir siendo modificable. En modo estricto, intentar una operación prohibida puede lanzar un error; no dependas de que falle silenciosamente.

---

## 4. Métodos matemáticos (`Math`)

#### `Math.round()`, `Math.floor()`, `Math.ceil()` y `Math.trunc()` — Básico

- **Qué hacen:** aplican distintas reglas para quitar la parte decimal.
- **Devuelven:** un número entero (salvo valores especiales como `NaN` o infinito).
- **Modifican el original:** No aplicable; reciben un número y devuelven otro valor.
- **Úsalos cuando:** necesites redondear o truncar un cálculo.

```javascript
console.log(Math.round(4.5)); // 5: entero más cercano
console.log(Math.floor(4.9)); // 4: hacia menos infinito
console.log(Math.ceil(4.1));  // 5: hacia más infinito
console.log(Math.trunc(4.9)); // 4: elimina los decimales
```

> Con números negativos, `floor()` y `trunc()` no son equivalentes: `Math.floor(-4.1)` da `-5`, mientras que `Math.trunc(-4.1)` da `-4`.

#### `Math.random()` — Básico

- **Qué hace:** genera un número pseudoaleatorio.
- **Devuelve:** un decimal mayor o igual que `0` y menor que `1`.
- **Modifica el original:** No aplicable.
- **Úsalo cuando:** necesites aleatoriedad para juegos o ejemplos; no para seguridad ni criptografía.

```javascript
const minimo = 1;
const maximo = 10;
const aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

console.log(aleatorio); // Un entero entre 1 y 10, inclusive
```

#### `Math.max()` y `Math.min()` — Básico

- **Qué hacen:** encuentran el mayor o el menor de los argumentos recibidos.
- **Devuelven:** un número.
- **Modifican el original:** No aplicable.
- **Úsalos cuando:** necesites comparar varios números.

```javascript
const numeros = [5, 10, 2];

console.log(Math.max(...numeros)); // 10
console.log(Math.min(...numeros)); // 2
```

> Si el arreglo está vacío, `Math.max(...[])` devuelve `-Infinity` y `Math.min(...[])` devuelve `Infinity`. Para listas grandes, evita expandir todos sus elementos con `...`.

---

## 5. Métodos de funciones (`Function`)

#### `call()`, `apply()` y `bind()` — Avanzado

- **Qué hacen:** permiten especificar el valor de `this` al ejecutar una función o preparar una llamada futura.
- **Devuelven:** `call()` y `apply()` devuelven el resultado de ejecutar la función; `bind()` devuelve una función nueva.
- **Modifican el original:** No; `bind()` crea una función nueva.
- **Úsalos cuando:** necesites controlar explícitamente el contexto `this` de una función.

| Método | ¿Cuándo ejecuta la función? | ¿Cómo pasa los argumentos? |
|---|---|---|
| `call()` | Inmediatamente | Uno por uno |
| `apply()` | Inmediatamente | En un arreglo (o arreglo similar) |
| `bind()` | Más adelante, al llamar la función devuelta | Uno por uno; también permite fijar argumentos iniciales |

```javascript
const persona = { nombre: "Carlos" };

function saludar(saludo, puntuacion) {
  return `${saludo}, soy ${this.nombre}${puntuacion}`;
}

console.log(saludar.call(persona, "Hola", "!")); // "Hola, soy Carlos!"
console.log(saludar.apply(persona, ["Qué tal", "."])); // "Qué tal, soy Carlos."

const saludarCarlos = saludar.bind(persona, "Buenos días");
console.log(saludarCarlos("!!!")); // "Buenos días, soy Carlos!!!"
```

> **Nota:** las funciones flecha no tienen un `this` propio, por lo que `call()`, `apply()` y `bind()` no cambian su `this`.

---

## 6. Métodos de promesas (`Promise`)

Una promesa representa un resultado que estará disponible más adelante: puede cumplirse o rechazarse. Estos ejemplos funcionan en un entorno con JavaScript moderno; puedes probarlos en la consola del navegador o en Node.js.

#### `then()`, `catch()` y `finally()` — Intermedio

- **Qué hacen:** `then()` procesa un resultado exitoso; `catch()` procesa un rechazo; `finally()` ejecuta una acción al terminar, tanto si se cumple como si se rechaza.
- **Devuelven:** cada uno devuelve una promesa nueva, lo que permite encadenarlos.
- **Modifican el original:** No; crean una cadena de promesas.
- **Úsalos cuando:** manejes resultados asíncronos con la sintaxis de promesas.

```javascript
const tarea = Promise.resolve("Datos recibidos");

tarea
  .then(resultado => {
    console.log(resultado); // "Datos recibidos"
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Proceso terminado");
  });
```

#### `Promise.all()` — Intermedio

- **Qué hace:** espera a que todas las promesas se cumplan.
- **Devuelve:** una promesa con los resultados en el orden de entrada; se rechaza si cualquiera de las promesas se rechaza.
- **Modifica el original:** No; devuelve una promesa nueva.
- **Úsalo cuando:** necesites que todas las operaciones tengan éxito para continuar.

```javascript
const tarea1 = Promise.resolve("uno");
const tarea2 = Promise.resolve("dos");

Promise.all([tarea1, tarea2]).then(resultados => {
  console.log(resultados); // ["uno", "dos"]
});
```

#### `Promise.allSettled()` — Intermedio

- **Qué hace:** espera a que todas las promesas terminen, sin importar si se cumplen o se rechazan.
- **Devuelve:** una promesa con un resultado por cada entrada, con su estado (`"fulfilled"` o `"rejected"`).
- **Modifica el original:** No; devuelve una promesa nueva.
- **Úsalo cuando:** quieras revisar qué pasó con cada operación aunque alguna haya fallado.

```javascript
const tarea1 = Promise.resolve("correcto");
const tarea2 = Promise.reject(new Error("falló"));

Promise.allSettled([tarea1, tarea2]).then(resultados => {
  console.log(resultados.map(resultado => resultado.status));
  // ["fulfilled", "rejected"]
});
```

> **En el navegador:** `fetch()` es una forma común de obtener datos de una URL. Una respuesta HTTP de error (por ejemplo, 404) no rechaza automáticamente la promesa: revisa `response.ok` antes de leer el cuerpo. La URL debe existir y ser accesible desde el entorno.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(datos => console.log(datos))
  .catch(error => console.error("No se pudieron cargar los datos:", error));
```

---

## 7. Almacenamiento web (`localStorage` y `sessionStorage`)

Estos métodos están disponibles en navegadores, no en el entorno global estándar de Node.js. `localStorage` persiste entre sesiones del navegador; `sessionStorage` dura mientras permanezca abierta la pestaña o sesión.

#### `setItem()`, `getItem()`, `removeItem()` y `clear()` — Intermedio

- **Qué hacen:** guardan, leen, eliminan una clave o borran todas las claves del almacenamiento elegido.
- **Devuelven:** `setItem()`, `removeItem()` y `clear()` no devuelven un valor útil; `getItem()` devuelve una cadena o `null` si la clave no existe.
- **Modifican el original:** sí, modifican el almacenamiento del navegador.
- **Úsalos cuando:** necesites guardar preferencias o datos sencillos entre visitas. No guardes información sensible.

```javascript
const usuario = { nombre: "Ana" };

localStorage.setItem("usuario", JSON.stringify(usuario));

const textoGuardado = localStorage.getItem("usuario");
const usuarioGuardado = textoGuardado === null
  ? null
  : JSON.parse(textoGuardado);

console.log(usuarioGuardado); // { nombre: "Ana" }

localStorage.removeItem("usuario");
console.log(localStorage.getItem("usuario")); // null
```

> `localStorage` almacena cadenas. Para guardar objetos se usa normalmente `JSON.stringify()` y para leerlos `JSON.parse()`. El análisis puede lanzar un error si el texto guardado no contiene JSON válido. `clear()` elimina **todas** las claves del almacenamiento de ese sitio, no solo las de tu aplicación.

---

## 8. Colecciones: `Map` y `Set`

### Métodos de `Map` — Intermedio

Un `Map` guarda pares clave-valor y permite usar distintos tipos de valores como claves.

#### `set()`, `get()`, `has()`, `delete()` y `clear()`

- **Qué hacen:** agregan o actualizan, leen, comprueban, eliminan una entrada o vacían el mapa.
- **Devuelven:** `set()` devuelve el mapa; `get()` devuelve el valor o `undefined`; `has()` devuelve un booleano; `delete()` indica si eliminó una entrada; `clear()` devuelve `undefined`.
- **Modifican el original:** Sí, salvo `get()` y `has()`, que solo consultan.
- **Úsalos cuando:** necesites un diccionario con claves que no sean solo cadenas, o quieras iterar fácilmente sus entradas.

```javascript
const mapa = new Map();
mapa.set("id", 100);

console.log(mapa.get("id"));   // 100
console.log(mapa.has("id"));   // true
console.log(mapa.delete("id"));// true
console.log(mapa.size);        // 0
mapa.set("curso", "JavaScript");
mapa.clear();
console.log(mapa.size);        // 0
```

### Métodos de `Set` — Intermedio

Un `Set` almacena valores únicos: agregar un valor que ya existe no crea un duplicado.

#### `add()`, `has()`, `delete()` y `clear()`

- **Qué hacen:** agregan, consultan, eliminan un valor o vacían el conjunto.
- **Devuelven:** `add()` devuelve el conjunto; `has()` devuelve un booleano; `delete()` indica si eliminó el valor; `clear()` devuelve `undefined`.
- **Modifican el original:** Sí, salvo `has()`, que solo consulta.
- **Úsalos cuando:** necesites conservar valores únicos o comprobar pertenencia.

```javascript
const conjunto = new Set();
conjunto.add(1);
conjunto.add(1); // No agrega un duplicado

console.log(conjunto.has(1)); // true
console.log(conjunto.size);   // 1
conjunto.delete(1);
console.log(conjunto.size);   // 0
conjunto.add(2);
conjunto.clear();
console.log(conjunto.size);   // 0
```

---

## Comparaciones rápidas

### `map()` o `forEach()`

| Necesidad | Método recomendado | Motivo |
|---|---|---|
| Crear un arreglo transformado | `map()` | Devuelve un resultado por cada elemento |
| Ejecutar una acción por elemento | `forEach()` | No está pensado para construir un arreglo |

### `find()` o `filter()`

| Necesidad | Método recomendado | Resultado |
|---|---|---|
| Obtener la primera coincidencia | `find()` | Un elemento o `undefined` |
| Obtener todas las coincidencias | `filter()` | Un arreglo, posiblemente vacío |

### `slice()` o `splice()` (arreglos)

| Método | Para qué sirve | ¿Modifica el arreglo? |
|---|---|---|
| `slice(inicio, fin)` | Copiar una porción | No |
| `splice(inicio, cantidad, ...elementos)` | Eliminar, insertar o reemplazar elementos | Sí |

> Aunque comparten parte del nombre, `String.prototype.slice()` trabaja con texto y `Array.prototype.slice()` con arreglos.

### Métodos mutables o métodos que crean copias

| Si quieres… | Elige |
|---|---|
| Ordenar el mismo arreglo | `sort()` |
| Obtener un arreglo ordenado sin cambiar el original | `toSorted()` |
| Invertir el mismo arreglo | `reverse()` |
| Obtener una copia invertida | `toReversed()` |

---

## Ejercicios para practicar

Prueba cada ejercicio primero sin mirar una solución. Usa los métodos de esta guía y verifica el resultado en la consola.

1. **Transformar:** dado `[2, 4, 6]`, crea un nuevo arreglo con cada número multiplicado por `3`.
2. **Filtrar:** de `[12, 17, 20, 25, 30]`, crea un arreglo con los números mayores o iguales a `20`.
3. **Buscar:** en `["rojo", "azul", "verde"]`, comprueba si `"azul"` está presente y encuentra su índice.
4. **Acumular:** calcula el total de `[8, 12, 5]` con `reduce()`.
5. **Texto:** convierte `"  Aprendo JavaScript  "` a `"aprendo javascript"` sin modificar la cadena original.
6. **Objetos:** convierte `{ curso: "JavaScript", nivel: "inicial" }` en un arreglo de pares clave-valor.
7. **Sin mutar:** crea una versión ordenada de `[9, 2, 5]` y comprueba que el original siga igual.
8. **Valores únicos:** crea un `Set` desde `[1, 1, 2, 3, 3]` y consulta cuántos valores distintos contiene.

### Resultados para comprobar

1. `[6, 12, 18]`
2. `[20, 25, 30]`
3. `true` y `1`
4. `25`
5. `"aprendo javascript"`; la cadena original no cambia
6. `[["curso", "JavaScript"], ["nivel", "inicial"]]`
7. El nuevo arreglo es `[2, 5, 9]`; el original permanece `[9, 2, 5]`
8. `3`

---

## Cierre

No es necesario memorizar todos los métodos. Primero identifica qué resultado necesitas, si quieres modificar el dato original y qué devuelve el método. Practicar con arreglos pequeños y consultar esta guía ayuda a elegir con confianza.
