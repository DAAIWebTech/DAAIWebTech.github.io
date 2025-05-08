let currentSlide = 0;

function moveSlide(direction) {
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length /4;

// Actualiza el índice de la imagen actual
currentSlide += direction;

// Si el índice es menor que 0, vuelve al último slide
if (currentSlide  <0) {
currentSlide = totalSlides - 1;
}
// Si el índice es mayor o igual al total de slides, vuelve al primer slide
if (currentSlide >= totalSlides) {
currentSlide = 0;
}

// Desplazar las imágenes en el carrusel
document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 25}%)`;
}

// Mover automáticamente cada 2 segundos
setInterval(() =>{
moveSlide(1); // 1 para avanzar
}, 3000);

function mostrarInformacion(nombre, descripcion, precio) {
    document.getElementById("productoNombre").textContent = nombre;
    document.getElementById("productoDescripcion").textContent = descripcion;
    document.getElementById("productoPrecio").textContent = precio;
    document.getElementById("infoProducto").style.display = "block"; // Mostrar la sección de información
}
const datos = ["Tops", "Trajes de baños", "Cereza", "Vestidos", "Pantalones", "Calzados"]; // Lista de ejemplo

