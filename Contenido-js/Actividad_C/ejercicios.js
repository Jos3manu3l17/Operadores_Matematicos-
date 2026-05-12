
// ==================================================================================================

console.log("=== Inicio del sistema del calculo de la operacion misteriosa ===");

// La operación misteriosa
// Se tiene la expresión matemática siguiente:
// (20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10)/5+3∗2−4
// Tu reto es implementarla en JavaScript y analizar paso a paso en qué orden se
// ejecutan las operaciones hasta llegar al resultado final.


// La operación misteriosa

// Expresión matemática:
// (20 + 10) / 5 + 3 * 2 - 4

let resultado;

// Paso 1: Resolver el paréntesis
resultado = (20 + 10);

console.log("Resultado del paréntesis:", resultado);

// Paso 2: Dividir entre 5
resultado = resultado / 5;

console.log("Resultado de la división:", resultado);

// Paso 3: Multiplicar 3 * 2
let multiplicacion = 3 * 2;

console.log("Resultado de la multiplicación:", multiplicacion);

// Paso 4: Sumar los resultados
resultado = resultado + multiplicacion;

console.log("Resultado de la suma:", resultado);

// Paso 5: Restar 4
resultado = resultado - 4;