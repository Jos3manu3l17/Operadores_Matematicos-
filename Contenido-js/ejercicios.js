console.log("=== Inicio del sistema de calculo en un terreno rectangular ===");

// El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.


// Pedimos datos al usuario
let base = parseFloat(prompt("Ingrese la base del terreno en metros: "));
let altura = parseFloat(prompt("Ingrese la altura del terreno en matros: "));


// Calculo directo
let area = base * altura;
let perímetro = 2 * (base + altura);


// Mostramos los resultados
console.log("El area del terreno es: " + area + " metros cuadrados.");
console.log("El perimetro del terreno es: " + perímetro + " metros");

console.log("=== Fin del sistema de calculo en un terreno rectangular ===");



// =============================================================================================


console.log("=== Inicio del sistema del calculo de 3 notas ===");

// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
// para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.


// Pedimos el resultado de las tres notas al usuario
let nota1 = parseFloat(prompt("Ingrese la nota # 1: "));
let nota2 = parseFloat(prompt("Ingrese la nota # 2: "));
let nota3 = parseFloat(prompt("Ingrese la nota # 3: "));

// Calculamos el promedio de las tres notas
let promedio = (nota1 + nota2 + nota3) / 3;

// Se muestra el promedio del resultado
console.log("El promedio del estudiante es: " + promedio);

console.log("=== Inicio del sistema del calculo de 3 notas ===");


// ==================================================================================================