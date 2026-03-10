//Ejercicio 1
const boton1 = document.getElementById("button1");
const mensajeEJ1 = document.getElementById("mensaje1")

boton1.addEventListener('click', () => {

    var sueldo = parseInt(prompt("Inserte su sueldo en bruto"))


    var sueldoNuevo = sueldo*0.86

    mensajeEJ1.textContent = sueldoNuevo;

});

//Ejercicio 2
const boton2 = document.getElementById("button2");
const mensajeEJ2 = document.getElementById("mensaje2")

boton2.addEventListener('click', () => {

    var numeroUusario = parseInt(prompt("Inserte un numero"))

    mensajeEJ2.textContent = "";

    for(let i = 0; i < numeroUusario; i++){

        mensajeEJ2.textContent += i + " "; 
    }

    

});

//Ejercicio 3
const boton3 = document.getElementById("button3");
const mensajeEJ3 = document.getElementById("mensaje3")

boton3.addEventListener('click', () => {


    let numero;
    let positivos = 0;
    let negativos = 0;

    mensajeEJ3.textContent = "";

    do{
        var numeroUusario3 = parseInt(prompt("Inserte un numero"))

        if (numero > 0) {
            positivos++;
        }

        if (numero < 0) {
            negativos++;
        }

    }while(numeroUusario3 != 0)
    

    if (negativos > 0) {
        mensajeEJ3.textContent = "Se introdujeron números negativos. Positivos: " + positivos + " Negativos: " + negativos;
    } else {
        mensajeEJ3.textContent = "No se introdujeron números negativos. Positivos: " + positivos;
    }

    

});


