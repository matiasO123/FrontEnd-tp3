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
   El area de un rectángulo es el ancho por el alto.
   La función toma 2 números y los multiplica. El resultado es el area
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
   Para contar la cantidad de palabras, se divide el texto por espacios y se cuenta la cantidad de elementos.
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
   Para invertir una cadena de texto, ésta se convierte en un array, separarando cada caracter. Luego los invertimos
   Y los volvemos a unir en una cadena de texto
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
   Palíndromo implica que se puede leer de adelante para atrás y de atrás para adelante.
   Para hacer eso, hacemos algo similar algo ejercicio anterior, invirtiendo el texto y comparándolo con el texto original.
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
   Se pide un dato (la edad) por prompt. El mismo es multiplicado por 7.
   Se muestra el resultado en la consola
*/
