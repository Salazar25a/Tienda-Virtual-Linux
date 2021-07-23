var intervCarrusel = null;
var idxImagen = -1;

window.onload = function() {
    iniciarCarrusel();
}

function next() {
    clearInterval(intervCarrusel);
    if (idxImagen == 3) {
        idxImagen = 0;
    } else {
        idxImagen = idxImagen + 1;
    }
    console.log('indice',idxImagen);
    setImage();
    iniciarCarrusel();
}
function setImage() {
    var carrusel = document.getElementById("carrusel");
    switch (idxImagen) {
        case 0:
            carrusel.innerHTML = "<img class='fade-in' src='carrusel/im2.jpg' width=100% height=300/>";
            break;
        case 1:
            carrusel.innerHTML = "<img class='fade-in' src='carrusel/im3.jpeg' width=100% height=300/>";
            break;
        case 2:
            carrusel.innerHTML = "<img class='fade-in' src='carrusel/im4.jpg' width=100% height=300/>";
            break;
        case 3:
            carrusel.innerHTML = "<img class='fade-in' src='carrusel/im5.jpg' width=100% height=300/>";
            
            break;
    }
}

function iniciarCarrusel() {
    intervCarrusel = setInterval(next, 5000);
}
function prev(){
    clearInterval(intervCarrusel);
    idxImagen = idxImagen -1;
    console.log('indice', idxImagen);
    setImage();
    iniciarCarrusel();
}