document.addEventListener("DOMContentLoaded", () => {
    // Posicionamos el elemento #contenedorCartas
    const contenedorCartas = document.getElementById("contenedorCartas");

    // 1) Su primer hijo
    console.log("Primer hijo:", contenedorCartas.firstElementChild);

    // 2) Su tercer hijo
    console.log("Tercer hijo:", contenedorCartas.children[2]);

    // 3) El siguiente hermano del tercer hijo
    const tercerHijo = contenedorCartas.children[2];
    console.log("Siguiente hermano del tercer hijo:", tercerHijo.nextElementSibling);

    // 4) Su último hijo
    console.log("Último hijo:", contenedorCartas.lastElementChild);

    // 5) Su padre
    console.log("Su padre:", contenedorCartas.parentElement);

    // 6) El padre del padre
    console.log("Padre del padre:", contenedorCartas.parentElement.parentElement);

    // 7) Su hermano anterior
    console.log("Hermano anterior:", contenedorCartas.previousElementSibling);

    // 8) Las clases del último hijo
    const ultimoHijo = contenedorCartas.lastElementChild;
    console.log("Clases del último hijo:", ultimoHijo.classList);
});
