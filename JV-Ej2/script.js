
console.log("mi script funcina");
document.addEventListener('DOMContentLoaded')
document.addEventListener('');


//constantes, variable
const lechuga = document.getElementById('mensaje');
const Boton = document.getElementById('boton');
const Boton2 = document.getElementById('boton2');
const Boton3 = document.getElementById('boton3');
const Boton4 = document.getElementById('boton4');
const Boton5 = document.getElementById('boton5');
const Boton6 = document.getElementById('boton6');
const Boton7 = document.getElementById('boton7');
const Boton8 = document.getElementById('boton8');
const Boton9 = document.getElementById('boton9');
const Boton10 = document.getElementById('boton10');
const Boton11 = document.getElementById('boton11');
const Boton12 = document.getElementById('boton12');
const boton13 = document.getElementById('boton13');
const prueba = document.getElementById('');



//Primer Ejercicio

Boton.addEventListener('click', () => {
    console.log('¡El botón  fue presionado!');
    console.log('¡El botón 1 fue presionado!');
    var num1 = parseInt(prompt("Inserta tu edad"));

    if(num1 => 18){
         lechuga.textContent = 'Eres mayor de edad';
    }


});

//Segundo Ejercicio

Boton2.addEventListener('click', () => {
    console.log('¡El botón 2 fue presionado!');
    var num1 = parseInt(prompt("Inserta tu edad"));

    if(num1 => 18){
         lechuga.textContent = 'Eres mayor de edad';
    }else{
        lechuga.textContent = 'Eres menor de edad';
    }


});

//Tercer Ejercicio


//Cuarto Ejercicio


//Quinto Ejercicio


//Sexto

//Septimo

Boton7.addEventListener('click', () => {
    console.log('¡El botón 7 fue presionado!');

   var nota = parseInt(prompt("Inserta su nota"));

     if (nota >= 0 && nota < 3) {
     lechuga.textContent = 'Muy deficiente';
     } else if (nota < 5) {
     lechuga.textContent = 'Insuficiente';
     } else if (nota < 6) {
     lechuga.textContent = 'Bien';
     } else if (nota < 9) {
     lechuga.textContent = 'Notable';
     } else if (nota <= 10) {
     lechuga.textContent = 'SobreSaliente';
     } else {
     lechuga.textContent = 'Pon algo coherente';
     }




});

//Octavo


Boton10.addEventListener('')

//Copia Pega
prueba.addEventListener('click', () => {
    console.log('¡El botón  fue presionado!');
    var num1 = parseInt(prompt("Inserta tu nota"));




});
