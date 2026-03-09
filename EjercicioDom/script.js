// EJERCICIOS CON DOMCONTENTLOADED
document.addEventListener('DOMContentLoaded', () => {
    // Ejercicio 1: Mensaje de bienvenida
    alert("Página lista");

    // Ejercicio 2: Cambiar texto automáticamente
    const h2 = document.getElementById('mensaje-carga');
    h2.textContent = "Contenido cargado correctamente";
});

// EJERCICIOS CON CLICK
let contador = 0;
const contadorBtn = document.getElementById('contador-btn');
const contadorSpan = document.getElementById('contador');

contadorBtn.addEventListener('click', () => {
    // Ejercicio 3: Contador básico
    contador++;
    contadorSpan.textContent = contador;
});

// Ejercicio 4: Cambiar color de fondo
const cajaColor = document.getElementById('caja-color');
const cambiarColorBtn = document.getElementById('cambiar-color-btn');

cambiarColorBtn.addEventListener('click', () => {
    const colores = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];
    const colorActual = cajaColor.style.backgroundColor;
    let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    while (nuevoColor === colorActual) {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }
    cajaColor.style.backgroundColor = nuevoColor;
});

// EJERCICIOS CON MOUSEOVER Y MOUSEOUT
const areaRaton = document.getElementById('area-raton');
const mensajeRaton = document.getElementById('mensaje-raton');

areaRaton.addEventListener('mouseover', () => {
    // Ejercicio 5 y 6
    mensajeRaton.textContent = "Dentro del área";
});

areaRaton.addEventListener('mouseout', () => {
    mensajeRaton.textContent = "Fuera del área";
});

// EJERCICIOS CON INPUT Y CHANGE
const inputTexto = document.getElementById('input-texto');
const mostrarTexto = document.getElementById('mostrar-texto');

inputTexto.addEventListener('input', () => {
    // Ejercicio 7: Mostrar lo que escribe
    mostrarTexto.textContent = inputTexto.value;
});

inputTexto.addEventListener('change', () => {
    // Ejercicio 8: Confirmar cambio
    alert("Valor confirmado");
});

// EJERCICIOS CON TECLADO
const teclaPulsada = document.getElementById('tecla-pulsada');

document.addEventListener('keydown', (event) => {
    // Ejercicio 9: Detectar tecla
    teclaPulsada.textContent = `Tecla pulsada: ${event.key} (Código: ${event.code})`;
});

// EJERCICIO MIXTO
const botonHover = document.getElementById('boton-hover');

botonHover.addEventListener('mouseenter', () => {
    botonHover.disabled = false;
});

botonHover.addEventListener('click', () => {
    alert("¡Botón activado y pulsado!");
});