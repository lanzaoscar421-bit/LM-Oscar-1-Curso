//

//Contador
let contador = 0;
const btnContador = document.getElementById("btnContador");
const contadorSpan = document.getElementById("contador");


btnContador.addEventListener('click', () => {
    
    contador ++;
    
    contadorSpan.textContent = contador;
});