/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
function capturaExcepcion() {
  try {
    // Código que puede lanzar una excepción
    let resultado = a / 0; // Esto no lanzará una excepción en JavaScript, pero puedes usar otro código que sí lo haga
    console.log(resultado);
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
  }
}
capturaExcepcion();

// 2. Captura una excepción utilizando try-catch y finally
function capturaExcepcionFinally() {
  try {
    // Código que puede lanzar una excepción
    let resultado = b / 0; // Esto no lanzará una excepción en JavaScript, pero puedes usar otro código que sí lo haga
    console.log(resultado);
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
  } finally {
    console.log("Bloque finally ejecutado");
  }
}
capturaExcepcionFinally();

// 3. Lanza una excepción genérica
function capturaExcepcionGenerica() {
  try {
    throw new Error("Esta es una excepción genérica");
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
  }
}
capturaExcepcionGenerica();

// 4. Crea una excepción personalizada
class MiExcepcion extends Error {
  constructor(mensaje) {
      super(mensaje);
      this.name = "MiExcepcion";
  }
}

function capturaExcepcionPersonalizada() {
    try {
        throw new MiExcepcion("Esta es una excepción personalizada");
    } catch (error) {
        console.error("Se ha producido un error:", error.name, "-", error.message);
    }
}


// 5. Lanza una excepción personalizada
capturaExcepcionPersonalizada();

// 6. Lanza varias excepciones según una lógica definida
capturarExcepcionSegunLogica(5);
function capturarExcepcionSegunLogica(valor) {
    try {
        if (valor < 0) {
            throw new Error("El valor no puede ser negativo");
        }
        if (valor === 0) {
            throw new Error("El valor no puede ser cero");
        }
        if (valor > 10) {
            throw new Error("El valor no puede ser mayor que 10");
        }
        console.log("Valor válido:", valor);
    }
    catch (error) {
        console.error("Se ha producido un error:", error.message);
    }
}

// 7. Captura varias excepciones en un mismo try-catch
function capturaVariasExcepciones(tipo) {
  try {
    if (tipo === "referencia") {
      console.log(variableInexistente);
    } else if (tipo === "tipo") {
      null.toString();
    } else {
      throw new RangeError("Tipo de excepción no válido");
    }
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}

capturaVariasExcepciones("referencia");
capturaVariasExcepciones("tipo");


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
function convertirValoresAFloat(valores) {
  for (const valor of valores) {
    try {
      const numero = Number.parseFloat(valor);
      if (Number.isNaN(numero)) {
        throw new TypeError(`El valor "${valor}" no es un número válido`);
      }
      console.log(`Valor convertido: ${numero}`);
    } catch (error) {
      console.error(`Error al convertir "${valor}": ${error.message}`);
    }
  }
}

convertirValoresAFloat(["12.5", "texto", "7", "3.14 euros"]);


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropiedadNoEncontradaError extends Error {
  constructor(propiedad) {
    super(`La propiedad "${propiedad}" no existe en el objeto`);
    this.name = "PropiedadNoEncontradaError";
  }
}

function verificarPropiedad(objeto, propiedad) {
  if (objeto === null || objeto === undefined || !(propiedad in objeto)) {
    throw new PropiedadNoEncontradaError(propiedad);
  }
  return true;
}

try {
  verificarPropiedad({ nombre: "Ada" }, "nombre");
  console.log("La propiedad existe");
  verificarPropiedad({ nombre: "Ada" }, "edad");
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function reintentar(operacion, maxIntentos = 10) {
  let ultimoError;

  for (let intento = 1; intento <= maxIntentos; intento += 1) {
    try {
      return operacion(intento);
    } catch (error) {
      ultimoError = error;
      console.error(`Intento ${intento} fallido: ${error.message}`);
    }
  }

  throw ultimoError;
}

let intentos = 0;
const resultado = reintentar(() => {
  intentos += 1;
  if (intentos < 3) {
    throw new Error("La operación todavía no está disponible");
  }
  return "Operación realizada correctamente";
});
console.log(resultado);