/* ========================================= */
/* VARIABLES */
/* ========================================= */

const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const mensajeFinal = document.getElementById("mensaje-final");
const heartsContainer = document.getElementById("hearts-container");

/* ========================================= */
/* BOTÓN NO ESCAPA */
/* ========================================= */

btnNo.addEventListener("mouseover", moverBoton);
btnNo.addEventListener("touchstart", moverBoton);

/* Función que mueve el botón */
function moverBoton(){

    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);

    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";

}

/* ========================================= */
/* BOTÓN SI */
/* ========================================= */

btnSi.addEventListener("click", () => {

    mensajeFinal.classList.remove("oculto");

    explosionCorazones();

});

/* ========================================= */
/* CREAR CORAZONES FLOTANTES */
/* ========================================= */

function crearCorazon(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}

/* Crear corazones constantemente */
setInterval(crearCorazon, 300);

/* ========================================= */
/* EXPLOSIÓN DE CORAZONES */
/* ========================================= */

function explosionCorazones(){

    for(let i=0; i<50; i++){

        setTimeout(() => {

            crearCorazon();

        }, i * 50);

    }

}
