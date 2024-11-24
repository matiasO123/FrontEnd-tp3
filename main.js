// Ejercicio 1: Calcular el área de un rectángulo
function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}
console.log("///////////////");
console.log("Solucion 1:");
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaRectangulo(10, 2)); // Resultado: 20
console.log(calcularAreaRectangulo(7, 7)); // Resultado: 49

/* Proceso de pensamiento:
   Identificamos que el área de un rectángulo se calcula multiplicando su ancho por su alto.
   Creamos una función que toma estos dos parámetros y devuelve el resultado.
*/

// Ejercicio 2: Contar palabras en una cadena
function contarPalabras(cadena) {
    return cadena.split(" ").length;
}
console.log("///////////////");
console.log("Solucion 2:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras("JavaScript es genial")); // Resultado: 3
console.log(contarPalabras("Un solo mundo")); // Resultado: 3

/* Proceso de pensamiento:
   Para contar palabras, dividimos la cadena por espacios usando split(" ") y contamos los elementos resultantes.
*/

// Ejercicio 3: Invertir una cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}
console.log("///////////////");
console.log("Solucion 3:");
console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log(invertirCadena("JavaScript")); // Resultado: "tpircSavaJ"
console.log(invertirCadena("mundo")); // Resultado: "odnum"

/* Proceso de pensamiento:
   Para invertir la cadena, la convertimos en un array de caracteres con split(""), invertimos el array con reverse()
   y lo unimos nuevamente en un string con join("").
*/

// Ejercicio 4: Encontrar el palíndromo
function esPalindromo(cadena) {
    const normalizada = cadena.toLowerCase().replace(/\s+/g, "");
    return normalizada === normalizada.split("").reverse().join("");
}
console.log("///////////////");
console.log("Solucion 4:");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("javascript")); // false

/* Proceso de pensamiento:
   Convertimos la cadena a minúsculas y eliminamos los espacios para una comparación uniforme.
   Comparamos la cadena con su versión invertida para determinar si es un palíndromo.
*/

// Ejercicio 5: Convertir la edad de un perro a años humanos
function edadCanina() {
    const edadPerro = prompt("¿Cuántos años tiene tu perro?");
    if (!isNaN(edadPerro) && edadPerro > 0) {
        console.log(`Tu perro tiene ${edadPerro * 7} años humanos.`);
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}
console.log("///////////////");
console.log("Solucion 5:");
edadCanina(); // Pide la edad por prompt

/* Proceso de pensamiento:
   Utilizamos prompt para pedir un valor al usuario.
   Multiplicamos la edad proporcionada por 7 y mostramos el resultado por consola.
   Validamos que la entrada sea un número positivo.
*/
