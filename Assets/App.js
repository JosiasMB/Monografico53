let pantallaActual = 2;

function mostrarPantalla(n) {
  const pantallas = document.querySelectorAll(".pantalla");

  pantallas.forEach((pantalla) => {
    pantalla.style.display = "none";
  });

  pantallaActual = (n + pantallas.length) % pantallas.length;

  pantallas[pantallaActual].style.display = "flex";
}

function cambiarPantallaAutomaticamente() {
  mostrarPantalla(pantallaActual + 1);
  setTimeout(cambiarPantallaAutomaticamente, 6000);
}

// Mostrar la primera pantalla al cargar la página
mostrarPantalla(pantallaActual);

// Iniciar el carrusel automático
cambiarPantallaAutomaticamente();
