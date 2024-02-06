/// CALCULADORA GASTOS ASADO 
const dineroIntegrantes = [];
const integrantesIngresados = [];

let integrantes;

do {
    integrantes = prompt(`Ingrese el nombre de cada integrante en mayúsculas y escriba "-" para finalizar`);

    if (integrantes !== "-" && integrantes.toUpperCase() === integrantes && integrantes.length >= 4) {
        alert(`${integrantes} ha sido añadido!`);

        let dinero;
        do {
            dinero = Number(prompt(`Ingrese el dinero que gastó ${integrantes}`));

            if (isNaN(dinero)) {
                alert("Por favor, ingrese un número válido.");
            } else if (dinero.toString().length > 3) {
                alert("Fin del ingreso");
            } else {
                alert(`Dinero ingresado: ${dinero}\nGordo, mínimo 4 cifras estamos en ARGENZUELA`);
            }
        } while (dinero.toString().length <= 3);

        dineroIntegrantes.push(dinero);
        integrantesIngresados.push(integrantes);
    } else if (integrantes !== "-") {
        alert(`La entrada '${integrantes}' no es válida. Por favor, ingrese al menos 4 letras en mayúsculas.`);
    }
} while (integrantes !== "-");

alert("Agregado de integrantes y gastos finalizado");

//////////////////////////////////////////////////////////////////////////////////

// Obtener el elemento de la tabla en el HTML
const tabla = document.getElementById("tablaGastos");
tabla.style.border = "1px solid black";

// Calcular el total de los gastos
const totalGastos = dineroIntegrantes.reduce((total, numero) => total + numero, 0);

// Iterar sobre los integrantes ingresados y agregarlos a la tabla
integrantesIngresados.forEach((integrante, index) => {
    const fila = document.createElement("tr");
    fila.style.border = "1px solid black";

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = integrante;
    fila.append(celdaNombre);

    const celdaGasto = document.createElement("td");
    celdaGasto.textContent = dineroIntegrantes[index]; // Obtener el gasto correspondiente al integrante
    fila.append(celdaGasto);


    const celdaPartidaDoble = document.createElement("td");
    celdaPartidaDoble.textContent = (totalGastos / integrantesIngresados.length) - dineroIntegrantes[index];
    fila.append(celdaPartidaDoble);

    tabla.appendChild(fila);
});

///////////////////////////////////////////////////////////////////////

