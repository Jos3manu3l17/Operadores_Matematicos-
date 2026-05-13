// Constantes del programa
const PRODUCCION_POR_HORA = 250;
const HORAS_TRABAJADAS = 8;
const CAPACIDAD_CAJA = 12;

// Variables para los cálculos
let totalPiezas;
let cajasLlenas;
let piezasSobrantes;

// Calcular el total de piezas producidas
totalPiezas = PRODUCCION_POR_HORA * HORAS_TRABAJADAS;

// Calcular cuántas cajas completas se llenan
cajasLlenas = Math.floor(totalPiezas / CAPACIDAD_CAJA);

// Calcular cuántas piezas quedan sueltas
piezasSobrantes = totalPiezas % CAPACIDAD_CAJA;

// Mostrar resultados en consola
console.log("=== Producción de piezas ===");
console.log("Total de piezas producidas: " + totalPiezas);
console.log("Cajas llenas: " + cajasLlenas);
console.log("Piezas sobrantes: " + piezasSobrantes);