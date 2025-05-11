const historial = [];
const tasaDeCambio = 1300;

function convertCurrency(pesos) {
    return pesos / tasaDeCambio;
}

function menu() {
    let opcion;
}

do {
    opcion = prompt("Seleccione una opción para operar: \n1) Divisa (ARS -> USD)\n2) Salir");
    switch (opcion) {
        case "1":
            /*Conversion*/
            let ingresoPesos = prompt("Ingrese el monto en pesos argentinos(ARS)");
            if (ingresoPesos === null) break; /*Detecta si el usuario canceló un prompt*/
            let pesos = parseFloat (ingresoPesos);
            if (isNaN(pesos) || pesos <= 0) {
                alert("Por favor ingrese un número válido mayor a 0.");
                break;
            } /*Verifica si el numero ingresado es un valor numerico y si es mayor a 0*/
            let usd = convertCurrency(pesos);
            alert(`Equivale a: ${usd.toFixed(2)} USD`); /*llama a la funcion covertCurrency para hacer el equivalente en USD y a ese resultado solo utiliza los primeros 2 decimales */
            /*Carga en el array historial los datos de la divisa */
            historial.push({
                tipo: "Divisa",
                entrada: `${pesos} ARS`,
                salida: `${usd.toFixed(2)} USD`,
                fecha: new Date().toLocaleDateString()
            });
            break;
            case "2":
                /*Opcion Salir*/
                alert("Revise la consola para ver el historial");
                console.log("Historial de conversiones:")
                console.table(historial); /*Muestra los datos en forma de tabla en la consola*/
                break;
            default:
                alert("Opción inválida, Intente de nuevo");
    }
} while (opcion !== "2");

menu();