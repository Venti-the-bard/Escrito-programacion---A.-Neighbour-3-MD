document.getElementById("entradas").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById("alertas").textContent = ""; // elimina alertas previas
    document.getElementById("confirmacion").textContent = ""; // elimina confirmaciones previas
    document.getElementById("total").textContent = ""; // elimina total previo

    // lee los datos ingresados y los div para alertas, confirmacion y total
    const nombre = document.getElementById("nombre").value.trim();
    const cantidad = document.getElementById("cantidad").value;
    const tipo = document.getElementById("tipo").value;
    const codigo = document.getElementById("codigo").value.trim();
    const alertContainer = document.getElementById("alertas");
    const confirmContainer = document.getElementById("confirmacion");
    const totalContainer = document.getElementById("total");

    // validacion del nombre
    if (nombre === "") {
        alertContainer.textContent = "Por favor, ingresa tu nombre.";
        return;
    }

    // validacion de cantidad de entradas
    if (cantidad <= 0 || isNaN(cantidad)) {
        alertContainer.textContent = "Por favor, ingresa una cantidad válida de entradas.";
        return;
    }

    // validacion de tipo de entrada
    if (tipo === "") {
        alertContainer.textContent = "Por favor, selecciona un tipo de entrada.";
        return;
    }

    // validacion de codigo
    if (codigo !== "" && codigo !== "ROCK10") {
        alertContainer.textContent = "El código ingresado no es válido";
        return;
    }

    // si todo es correcto, calcular total
    let precio = 0;
    if (tipo === "general") {
        precio = 1000 * cantidad;
    } else if (tipo === "vip") {
        precio = 2000 * cantidad;
    } else if (tipo === "platino") {
        precio = 3000 * cantidad;
    }
    if (codigo === "ROCK10") {
        precio *= 0.9; // Aplica descuento del 10%
    }
    confirmContainer.textContent = `Reserva confirmada para ${nombre}.`;
    totalContainer.textContent = `Total a pagar: $${precio.toFixed(2)}`;
});
