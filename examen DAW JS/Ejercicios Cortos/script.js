//Ejercicio 1
const boton1 = document.getElementById("button1");
const mensajeEJ1 = document.getElementById("mensaje1")
const notaMedia = document.getElementById("notamedia")

boton1.addEventListener('click', () => {



    mensajeEJ1.textContent = " ";

    var notastodas= '';

    const media = '';

    for(let i =0; i < 3; i++){
        var nota = parseInt(prompt('Inserte la nota'))

        var notas = [nota];
        mensajeEJ1.textContent += notas + " ";
        notas = notastodas;

    }


    mensajeEJ1.textContent = notastodas

});

//Ejercicio 2
const boton2 = document.getElementById("button2");
const mensajeEJ2 = document.getElementById("mensaje2")

boton2.addEventListener('click', () => {

    const fin = 'fin'
    
    do{

        var producto =  (prompt('Inserte los prodructos'))

        const prodructos = [producto]



    }while(productos !=  fin)





});

//Ejercicio 3
const boton3 = document.getElementById("button3");
const mensajeEJ3 = document.getElementById("mensaje3")

boton3.addEventListener('click', () => {

    var saldoInicial = 1000;


    const menu = prompt('1. Ver Saldo', '2. Ingresar', '3.Retirar','4..Salir')

    if (menu != 4){

        mensajeEJ3.textContent = 'Salir'
    }




    
    

});

//Ejercicio 4
const boton4 = document.getElementById("button4");
const mensajeEJ4 = document.getElementById("mensaje4")

boton4.addEventListener('click', () => {


    var numero = [];

    do{
        var numerosInsertar = parseInt(prompt('Inserta numeros'))

        numero = [numerosInsertar]



    }while(numerosInsertar != 0)

        mensajeEJ4.textContent = numeros

    
    

});


//Ejercicio 5

const boton5 = document.getElementById("button5");
const mensajeEJ5 = document.getElementById("mensaje5")
const vocalesEJ5 = document.getElementById('mensajeVocales')

boton5.addEventListener('click', () => {


    var frase = prompt ('Inserte la frase');


    var numeroCaracteres = frase.length;


    mensajeEJ5.textContent = 'Su frase tiene estos caracteres: ' + numeroCaracteres;
    vocalesEJ5.textContent;


});


//Ejercicio 6


const boton6 = document.getElementById("button6");
const mensajeEJ6 = document.getElementById("mensaje6")

boton6.addEventListener('click', () => {


    const numero = parseInt(prompt('Inserta cuantos alumnos desea guardar'))

    // for(let i =0; i < numero; i++){
    //     var nombre = prompt('Inserte el nombre del alumno')

    // }
    // var nombres = [nombre]

    var nombre = prompt ('Inserte el nombre1');
    var nombre2 = prompt ('Inserte el nombre2');
    var nombre3 = prompt ('Inserte el nombre3');


    var nombres = [nombre, nombre2, nombre3]

    mensajeEJ6.textContent = 'Los alumnos registrados son: ' + nombres
});



//Ejercicio 7

const boton7 = document.getElementById("button7");
const mensajeEJ7 = document.getElementById("mensaje7")

boton7.addEventListener('click', () => {


    var numerosRandoms = '';

    const numeroAleatorios = parseInt(prompt('Inserta los numero aleaatorios que desa generar'))


    // numerosRandoms = numeroAleatorios.    

});
