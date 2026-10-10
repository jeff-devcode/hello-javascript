/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo
function calculateTotal(price, taxRate) {
    if (typeof price !== 'number' || typeof taxRate !== 'number') {
        throw new Error('El precio y la tasa de impuestos deben ser números');
    }
    const tax = price * taxRate;
    const total = price + tax;
    return total;
}

// console.log(calculateTotal(100, 0.22)); // Debería devolver 120, pero devuelve 100ss


// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución
function findMax(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El argumento debe ser un arreglo');
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let myArray = [3, 5, 7, 2, 8];
console.log(findMax(myArray)); // Debería devolver 8
