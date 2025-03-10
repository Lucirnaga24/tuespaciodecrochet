let puntosPorFila = 0;
let totalFilas = 0;
let contadorPuntos = 0;
let contadorFilas = 0;
let historial = [];
let valoresEstablecidos = false;

document.querySelector('#btnEstablecer').addEventListener('click', establecerValores);
document.querySelector('#btnAumentarPunto').addEventListener('click', aumentarPunto);
document.querySelector('#btnAumentarFila').addEventListener('click', aumentarFila);
document.querySelector('#btnDeshacer').addEventListener('click', deshacer);
document.querySelector('#btnReiniciar').addEventListener('click', reiniciar);

function establecerValores() {
    puntosPorFila = +document.querySelector('#puntos').value || 0;
    totalFilas = +document.querySelector('#filas').value || 0;

    if (puntosPorFila > 0 && totalFilas > 0) {
        valoresEstablecidos = true;
        reiniciar();
    } else {
        alert('Debes establecer valores mayores a 0 para continuar.');
    }
}

function aumentarPunto() {
    if (!valoresEstablecidos) {
        alert('Primero debes establecer los valores.');
        return;
    }
    if (contadorFilas >= totalFilas && totalFilas > 0) return;
    historial.push({ punto: contadorPuntos, fila: contadorFilas });
    contadorPuntos++;
    if (contadorPuntos >= puntosPorFila && puntosPorFila > 0) {
        contadorPuntos = 0;
        aumentarFila();
    }
    actualizarPantalla();
    verificarFinalizacion();
}

function aumentarFila() {
    if (!valoresEstablecidos) {
        alert('Primero debes establecer los valores.');
        return;
    }
    if (contadorFilas >= totalFilas && totalFilas > 0) return;
    historial.push({ punto: contadorPuntos, fila: contadorFilas });
    contadorFilas++;
    actualizarPantalla();
    verificarFinalizacion();
}

function deshacer() {
    if (historial.length > 0) {
        let ultimoEstado = historial.pop();
        contadorPuntos = ultimoEstado.punto;
        contadorFilas = ultimoEstado.fila;
        actualizarPantalla();
    }
}

function reiniciar() {
    contadorPuntos = 0;
    contadorFilas = 0;
    historial = [];
    actualizarPantalla();
}

function actualizarPantalla() {
    document.querySelector('#contadorPuntos').innerText = contadorPuntos;
    document.querySelector('#contadorFilas').innerText = contadorFilas;
}

function verificarFinalizacion() {
    if (contadorFilas >= totalFilas && totalFilas > 0) {
        alert('¡Has completado todas las filas!');
    }
}