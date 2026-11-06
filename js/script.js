
/* ==============================
   CORAZONES FLOTANTES
============================== */

const contenedorCorazones = document.getElementById("corazones");

function crearCorazon() {

    const corazon = document.createElement("span");

    corazon.classList.add("corazon");

    corazon.innerHTML = Math.random() > 0.5 ? "❤" : "♡";

    corazon.style.left = Math.random() * 100 + "%";

    corazon.style.fontSize = (15 + Math.random() * 25) + "px";

    corazon.style.animationDuration = (6 + Math.random() * 6) + "s";

    contenedorCorazones.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 12000);

}

setInterval(crearCorazon, 500);


/* ==============================
   VISOR DEL ALBUM
============================== */

const fotos = document.querySelectorAll(".foto img");

const visor = document.getElementById("visor");

const imagenGrande = document.getElementById("imagenGrande");

const cerrarVisor = document.getElementById("cerrarVisor");

const botonAnterior = document.getElementById("anterior");

const botonSiguiente = document.getElementById("siguiente");

let indiceActual = 0;


/* ABRIR FOTOGRAFIA */

fotos.forEach((foto, indice) => {

    foto.addEventListener("click", () => {

        indiceActual = indice;

        mostrarImagen();

        visor.classList.add("activo");

    });

});


/* MOSTRAR IMAGEN */

function mostrarImagen() {

    imagenGrande.src = fotos[indiceActual].src;

    imagenGrande.alt = fotos[indiceActual].alt;

}


/* CERRAR VISOR */

cerrarVisor.addEventListener("click", () => {

    visor.classList.remove("activo");

});


/* SIGUIENTE FOTO */

botonSiguiente.addEventListener("click", () => {

    indiceActual++;

    if (indiceActual >= fotos.length) {
        indiceActual = 0;
    }

    mostrarImagen();

});


/* FOTO ANTERIOR */

botonAnterior.addEventListener("click", () => {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = fotos.length - 1;
    }

    mostrarImagen();

});


/* CERRAR AL HACER CLICK FUERA */

visor.addEventListener("click", (evento) => {

    if (evento.target === visor) {

        visor.classList.remove("activo");

    }

});


/* NAVEGACION CON TECLADO */

document.addEventListener("keydown", (evento) => {

    if (!visor.classList.contains("activo")) return;

    if (evento.key === "Escape") {
        visor.classList.remove("activo");
    }

    if (evento.key === "ArrowRight") {
        botonSiguiente.click();
    }

    if (evento.key === "ArrowLeft") {
        botonAnterior.click();
    }

});
