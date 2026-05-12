console.log("=== Inicio del sistema de calculadora de gastos de viaje ===");

    // Ejercico 1: Calculadora de gastos de viaje
    // Un grupo de amigos realiza un viaje con los siguientes costos fijos:
    // • Transporte: $120.000
    // • Alojamiento: $200.000
    // • Alimentación: $150.000
    // El total debe dividirse en partes iguales entre 4 personas. Además, cada persona
    // entregará $130.000 y se debe calcular el sobrante.
    // Requerimiento:
    // • Usa constantes para los costos y la cantidad de personas.
    // • Usa variables para el total, el aporte individual y el sobrante.



    // En esta parte se definen las constantes ya que seran los valores que no cambiaran en el 
    // transcurso del ejercicio
    const transporte = 120.000;
    const alojamiento = 200.000;
    const alimentacion = 150.000;
    const personas = 4;
    const aporteIndividual = 130.000;


    // Aqui se definen las variables que se utilizaran para los calculos pedidos 
    // por el ejercicio, variables que pueden cambiar
    let totalGastos;
    let pagoPorPersona;
    let totalAportado;
    let sobrante;

    // Se realizan los calculos
    totalGastos = transporte + alojamiento + alimentacion;
    pagoPorPersona = totalGastos / personas;
    totalAportado = aporteIndividual * personas;
    sobrante = totalAportado - totalGastos;

    // Se muestra el resultado en la consola con el resultado concatenado
    console.log("Total de gastos del viaje: $" + totalGastos);
    console.log("Cada persona debe pagar: $" + pagoPorPersona);
    console.log("Total aportado por el grupo: $" + totalAportado);
    console.log("Lo que sobra despues de pagar los gastos: $" + sobrante);

console.log("=== Fin del sistema de calculadora de gastos de viaje ===");

// =======================================================================================
