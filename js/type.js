// Typewriter in JavaScripy by: https://codepen.io/timdotcode/pen/bOejXp   -  Modificado para adecuarse a este funcionamiento

// Elemento donde se escribirá el texto
let typeWriterElement = document.querySelector('#typewriter');

// Texto a escribir
let text = "¡Bienvenidx a tu espacio de crochet! Inspirate, aprende y crea con nosotrxs ☺";

// Función para el efecto de máquina de escribir
function typeWriter(text, i) {
    if (i < text.length) {
        typeWriterElement.innerHTML = text.substring(0, i + 1);
        let rndTyping = 100 - Math.random() * 50;
        setTimeout(() => typeWriter(text, i + 1), rndTyping);
    }
}

// Iniciar la animación solo una vez al cargar la página
window.addEventListener("load", () => typeWriter(text, 0));