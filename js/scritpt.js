// Array de ejemplo para practicar
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Obtener el primer elemento del array
// Enunciado: Dado un array, retorna el primer elemento del mismo.

console.log(numeros[0])

// 2. Obtener el último elemento del array
// Enunciado: Dado un array, retorna el último elemento del mismo.

console.log(numeros[numeros.length - 1])

// 3. Agregar un elemento al inicio del array
// Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.

numeros.unshift(7)

console.log(numeros)

// 4. Eliminar el primer elemento del array
// Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.

numeros.shift(7)

// 5. Agregar un elemento al final del array
// Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.

numeros.push(100)


// 6. Eliminar el último elemento del array
// Enunciado: Elimina el último elemento de un array y devuelve el array resultante.


numeros.pop()

// 7. Combinar dos arrays
// Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.

let frutas = ["manzana", "pera", "limon", "fresa"]

let numerosYFrutas = numeros.concat(frutas)

console.log(numerosYFrutas)
// 8. Encontrar si un array incluye un elemento
// Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.


const existePera = frutas.includes("patata")

console.log(existePera)

// 9. Buscar el índice de un elemento
// Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.


let indice = frutas.indexOf("limon");

console.log(indice)


// 10. Reemplazar un elemento en un array
// Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.

frutas.splice(1, 0, "mandarina")
console.log(frutas)


// 11. Sumar todos los elementos del array
// Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.

console.log(numeros)

let suma = numeros.reduce(function (acumulador, num) {
    return acumulador + num;

});
console.log(suma)

// 12. Multiplicar todos los elementos del array
// Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.

function multiplicar(numeros, valor) {

    return numeros.map(num => num * valor)

}
const resultado = multiplicar(numeros, 5)
console.log(resultado)

// 13. Filtrar números mayores a un valor
// Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.

function filtrarMayores(numero, valor) {

    return numeros.filter(num => num > valor)
}

const res = filtrarMayores(numeros, 6)
console.log(res)

// 14. Verificar si todos los elementos son mayores a un númeroS
// Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.
function sonMayores(numero, valor) {
    return numeros.every(num => num > valor)
}
const ress = sonMayores(numeros, 0)
console.log(ress)

// 15. Obtener el primer elemento que cumple una condición
// Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

function encontrarPrimero(numeros, valor) {
    return numeros.find(num => num > valor);
}

const resu = encontrarPrimero(numeros, 4)

console.log(resu)
// 16. Imprimir cada elemento del array
// Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.
function imprimirArray(numeros) {
    numeros.forEach(num => console.log(num));
}
imprimirArray(numeros)
// 17. Crear un array con el doble de cada número
// Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.

const duplicados = numeros.map(num => num * 2);
console.log(duplicados);

// 18. Convertir un array de nombres en mayúsculas
// Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.

const mayusculas = frutas.map(frutas => frutas.toUpperCase());
console.log(mayusculas)