const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
})
cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})

//funcion para el efecto smooth
function scrollSuave(target) {
    const elemento = document.querySelector(target);
    window.scrollTo({
        top: elemento.offsetTop,
        behavior: 'smooth'
    });
}

// al hacer click en los enlaces
const enlacesInternos = document.querySelectorAll('nav a');
enlacesInternos.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const destino = e.target.getAttribute('href');
        scrollSuave(destino);//llega a destino
    });
});