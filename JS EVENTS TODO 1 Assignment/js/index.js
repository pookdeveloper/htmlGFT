

document.getElementById("1").addEventListener("click", verBoton, false);

document.getElementById("2").addEventListener("click", verBoton, false)

function verBoton(elemento) {
    alert('BOTON ' + elemento.target.id);
}
