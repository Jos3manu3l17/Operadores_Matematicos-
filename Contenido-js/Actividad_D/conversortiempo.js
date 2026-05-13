//Ejercicio 2: Conversor de tiempo//
//Un aprendiz registró 7.200 segundos de actividad física. Necesita expresarlos en://
//• Minutos.//
//• Horas.//
//• Días.//
//Requerimiento://
//• Usa una constante para los segundos.//
//• Declara variables para almacenar las conversiones.//

// Ejercicio 2: Conversor de tiempo//

// Constante los segundos //
const segundos = 7200;

// Variables utilizadas //
let minutos;
let horas;
let dias;

// Conversión a minutos//
minutos = segundos / 60;

// Conversión a horas//
horas = segundos / 3600;

// Conversión a días//
dias = segundos / 86400;

// resultados//
console.log("Segundos:", segundos);
console.log("Minutos:", minutos);
console.log("Horas:", horas);
console.log("Días:", dias);