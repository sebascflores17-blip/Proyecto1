// --- BOTÓN 9: CALCULAR PRECIO TOTAL ---
document.getElementById('btnCalcularPrecio').addEventListener('click', () => {
    // Tomamos el precio del primer producto de la tabla (Polo)
    const precioUnitario = parseFloat(document.querySelector('.product-table .precio-producto').innerText);
    
    // Obtenemos la cantidad del input number
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Validamos que la cantidad sea un número válido
    if (isNaN(cantidad) || cantidad < 1) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    const total = precioUnitario * cantidad;

    // Mostramos el resultado en el H2 correspondiente
    const resultadoH2 = document.getElementById('resultadoPrecio');
    resultadoH2.textContent = `El precio total es: S/ ${total.toFixed(2)}`;
});


// --- BOTÓN 10: MOSTRAR IDs CONCATENADOS ---
document.getElementById('btnMostrarIds').addEventListener('click', () => {
    // Seleccionamos todos los inputs que pertenecen a la clase 'datos-cliente'
    const inputs = document.querySelectorAll('.datos-cliente');
    
    let idsConcatenados = '';
    
    // Recorremos la colección de nodos (NodeList) y extraemos los IDs
    inputs.forEach(input => {
        idsConcatenados += input.id + ' '; // Agregamos el id y un espacio
    });

    // Mostramos los IDs en el H2 correspondiente
    document.getElementById('resultadoIds').textContent = `IDs concatenados: ${idsConcatenados.trim()}`;
});


// --- BOTÓN 11: CREAR PÁRRAFO CON NÚMERO DE INPUTS ---
document.getElementById('btnContarInputs').addEventListener('click', () => {
    // Seleccionamos todos los inputs de tipo texto
    const inputsDeTexto = document.querySelectorAll('input[type="text"]');
    const numeroDeInputs = inputsDeTexto.length;

    // Creamos un nuevo elemento de párrafo
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = `El número de inputs de tipo 'text' existentes es: ${numeroDeInputs}.`;

    // Limpiamos el contenedor y añadimos el nuevo párrafo
    const contenedor = document.getElementById('contenedorParrafo');
    contenedor.innerHTML = ''; // Limpia cualquier párrafo anterior
    contenedor.appendChild(nuevoParrafo);
});


// --- BOTÓN 12: CALCULAR DESCUENTO O RECARGO ---
document.getElementById('btnCalcularDescuento').addEventListener('click', () => {
    // 1. Calculamos la suma de caracteres de los 3 inputs de texto
    const inputsCliente = document.querySelectorAll('.datos-cliente');
    let totalCaracteres = 0;
    inputsCliente.forEach(input => {
        totalCaracteres += input.value.length;
    });

    // 2. Obtenemos el valor de la cantidad
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // 3. Obtenemos el precio total (lo recalculamos para asegurar que esté actualizado)
    const precioUnitario = parseFloat(document.querySelector('.product-table .precio-producto').innerText);
    const precioTotal = precioUnitario * cantidad;
    
    const textArea = document.getElementById('comentarios');

    if (isNaN(precioTotal) || precioTotal <= 0) {
        alert("Primero debe calcular un precio total válido.");
        return;
    }

    // 4. Comparamos y aplicamos la lógica
    if (totalCaracteres > cantidad) {
        // Aplicar descuento del 10%
        const descuento = precioTotal * 0.10;
        const totalConDescuento = precioTotal - descuento;
        textArea.value = `¡Descuento del 10% aplicado!
Descuento: S/ ${descuento.toFixed(2)}
Total a Pagar: S/ ${totalConDescuento.toFixed(2)}`;
    } else {
        // Aplicar recargo del 5%
        const recargo = precioTotal * 0.05;
        const totalConRecargo = precioTotal + recargo;
        textArea.value = `Recargo del 5% aplicado.
Recargo: S/ ${recargo.toFixed(2)}
Total a Pagar: S/ ${totalConRecargo.toFixed(2)}`;
    }
});


// --- ACTIVIDAD DOMICILIARIA ---
const inputGenerador = document.getElementById('generadorInputs');
const contenedorCajas = document.getElementById('cajasGeneradas');

// Usamos el evento 'input' que se dispara con cada cambio en el texto
inputGenerador.addEventListener('input', (evento) => {
    const texto = evento.target.value;
    const numeroDeCaracteres = texto.length;

    // Limpiamos el contenedor antes de generar nuevas cajas
    contenedorCajas.innerHTML = '';

    // Creamos tantos inputs como caracteres haya
    for (let i = 0; i < numeroDeCaracteres; i++) {
        const nuevaCaja = document.createElement('input');
        nuevaCaja.type = 'number';
        nuevaCaja.placeholder = i + 1; // Para numerarlas visualmente
        contenedorCajas.appendChild(nuevaCaja);
    }
});