const palabras = [
    { letra: "A", pista: "A: Herramienta esencial para tejer crochet", respuesta: "aguja" },
    { letra: "B", pista: "B: Uno de los puntos básicos", respuesta: "bajo" },
    { letra: "C", pista: "C: Técnica de tejido con gancho", respuesta: "crochet" },
    { letra: "D", pista: "D: Acción posible con la técnica tapestry crochet", respuesta: "dibujar" },
    { letra: "E", pista: "E: Tipo de tejido fino con diseños abiertos", respuesta: "encaje" },
    { letra: "F", pista: "F: Técnica de crochet con espacios cerrados y abiertos", respuesta: "filet" },
    { letra: "G", pista: "G: Tipo de cuadro famoso en prendas de los años 70", respuesta: "granny" },
    { letra: "H", pista: "H: Material utilizado para tejer crochet", respuesta: "hilo" },
    { letra: "I", pista: "I: País clave en la historia del crochet", respuesta: "irlanda" },
    { letra: "J", pista: "J: País de donde proviene la artista Toshiko Horiuchi MacAdams", respuesta: "japon" },
    { letra: "K", pista: "K: Medida utilizada para pesar ovillos", respuesta: "kilogramo" },
    { letra: "L", pista: "L: Hilado de origen animal", respuesta: "lana" },
    { letra: "M", pista: "M: Herramientas usadas para señalar puntos en crochet", respuesta: "marcadores" },
    { letra: "N", pista: "N: Se generan cuando se enreda el ovillo", respuesta: "nudos" },
    { letra: "O", pista: "O: Su trabajo pertenece a la corriente de arte contemporáneo “yarn bombing”", respuesta: "olek" },
    { letra: "P", pista: "P: Diseño que guía la realización de un tejido en crochet", respuesta: "patron" },
    { letra: "Q", pista: "Q (segunda letra): Término en inglés para los 'cuadrados de abuela'", respuesta: "Square" },
    { letra: "R", pista: "R: Lugar donde actualmente se comparte mucho sobre crochet", respuesta: "redes" },
    { letra: "S", pista: "S: Se usan para representar los puntos en un patrón", respuesta: "simbolos" },
    { letra: "T", pista: "T: técnica utilizada para hacer dibujos cambiando de color", respuesta: "tapestry" },
    { letra: "U", pista: "U: Apellido de la artista que hace esculturas de muejeres en poses relajadas y naturales", respuesta: "ustinova" },
    { letra: "V", pista: "V: Prenda de vestir que se puede tejer a crochet", respuesta: "vestido" },
    { letra: "W", pista: "W: Primer nombre del antropólogo que halló vestigios de crochet en Sudamérica", respuesta: "walter" },
    { letra: "X", pista: "X (tercera letra): Palabra clave para encontrar patrones de tapestry crochet '_____ chart'", respuesta: "pixel" },
    { letra: "Y", pista: "Y: Primer nombre de la artista que hace esculturas de muejeres en poses relajadas y naturales ", respuesta: "yulia" },
    { letra: "Z", pista: "Z: Patrón con forma de picos en triangulo sucesivos", respuesta: "zigzag" },
];

const pistaElemento = document.querySelector("#pista");
const entradaElemento = document.querySelector("#input");
const botonEnviar = document.querySelector("#enviar");
const botonPasar = document.querySelector("#pasar");
const resultadoElemento = document.querySelector("#resultado");
const tiempoElemento = document.querySelector("#timer");
const letrasElemento = document.querySelector("#letras");
const botonInicio = document.querySelector("#jugar");
const botonReinicio = document.querySelector("#reestart");
const reestartElemento = document.querySelector("#divreestart");
const respuestasElemento = document.querySelector("#divrespuestas");
const botonRespuestas = document.querySelector("#respuestas");

let indicePregunta = 0;
let puntaje = 0;
let temporizador;
let tiempo = 120;
let sinResponder = palabras.slice();

// mostrar letras con color correspondiente
function mostrarLetras() {
    letrasElemento.innerHTML = "";
    palabras.forEach(palabra => {
        const span = document.createElement("span");
        span.textContent = palabra.letra;
        span.id = "letra-" + palabra.letra;
        span.classList.add("border-2", "border-lime-100", "rounded-full", "text-lime-100" , "py-1", "px-3" , "m-2", "text-justify");
        letrasElemento.appendChild(span);
    });
}

function cambiarColorLetra(letra, color) {
    document.querySelector("#letra-" + letra).style.backgroundColor = color;
}

// iniciar juego
function iniciarJuego() {
    botonInicio.style.display = "none";
    mostrarLetras(); 
    mostrarPregunta(); 
    temporizador = setInterval(() => {
        tiempo--;
        tiempoElemento.textContent = "Tiempo: " + tiempo + "s";
        if (tiempo <= 0) {
            terminarJuego();
        }
    }, 1000);
    entradaElemento.style.display = "block";
    botonEnviar.style.display = "block";
    botonPasar.style.display = "block";
    tiempoElemento.style.display = "block";
    entradaElemento.focus();
}

function mostrarPregunta() {
    if (indicePregunta < palabras.length) {
        pistaElemento.textContent = palabras[indicePregunta].pista;
        entradaElemento.value = "";
        entradaElemento.focus();
    } else {
        terminarJuego();
    }
}

function comprobarRespuesta() {
    const respuestaUsuario = entradaElemento.value.trim().toLowerCase();
    const respuestaCorrecta = palabras[indicePregunta].respuesta.toLowerCase();
    const letraActual = palabras[indicePregunta].letra;
    if (respuestaUsuario === respuestaCorrecta) {
        puntaje++; 
        cambiarColorLetra(letraActual, "green"); 
    } else {
        cambiarColorLetra(letraActual, "red");
    }
    indicePregunta++;
    mostrarPregunta();
}

function pasarPalabra() {
    if (indicePregunta < palabras.length) {
        const palabraActual = palabras.splice(indicePregunta, 1)[0];
        palabras.push(palabraActual);
        cambiarColorLetra(palabraActual.letra, "blue");
    }
    mostrarPregunta();
}

function terminarJuego() {
    clearInterval(temporizador);
    pistaElemento.textContent = " JUEGO TERMINADO !! Respuestas correctas: " + puntaje + "/" + palabras.length;
    entradaElemento.disabled = true;
    botonEnviar.disabled = true;
    botonPasar.disabled = true;
    reestartElemento.style.display = "block";
}

// eventos
botonInicio.addEventListener("click", iniciarJuego);
botonEnviar.addEventListener("click", comprobarRespuesta);
botonPasar.addEventListener("click", pasarPalabra);
botonReinicio.addEventListener("click", () => location.reload());
botonRespuestas.addEventListener("click", () => respuestasElemento.style.display = "block");
entradaElemento.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && entradaElemento.value.trim() !== "") comprobarRespuesta();
    if (event.key === "ArrowRight") pasarPalabra();
});

