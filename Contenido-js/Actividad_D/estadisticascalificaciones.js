//Ejercicio 4: Estadísticas de calificaciones//
//Un aprendiz obtuvo las siguientes 4 notas: 4.5, 3.8, 2.9 y 4.0.
//Se debe calcular:
//• La suma de las 4 notas.
//• El promedio.
//• El resultado de la siguiente operación:
//(nota1 + nota2) * (nota3 + nota4) / 2;
//Requerimiento:
//• Declara cada nota como constante.
//• Usa variables para la suma, el promedio y el resultado de la expresión.


// Ejercicio 4: Estadísticas de calificaciones //

// Constantes notas //
const nota1 = 4.5;
const nota2 = 3.8;
const nota3 = 2.9;
const nota4 = 4.0;

// Variables utilizadas //
let suma;
let promedio;
let resultado;

// Cálculo de la suma de las 4 notas //
suma = nota1 + nota2 + nota3 + nota4;

// Cálculo del promedio //
promedio = suma / 4;

// Cálculo de la expresión solicitada //
resultado = (nota1 + nota2) * (nota3 + nota4) / 2;

// resultados //
console.log("Suma de notas:", suma);
console.log("Promedio:", promedio);
console.log("Resultado de la expresión:", resultado);







