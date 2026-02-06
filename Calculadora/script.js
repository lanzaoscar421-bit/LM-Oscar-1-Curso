//Input usuario pone numeros
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");

//Zona Operaciones
const btnSumar =  document.getElementById("btnSumar");
const btnRestar =  document.getElementById("btnRestar");
const btnMultiplicar =  document.getElementById("btnMultiplicar");
const btnDividir =  document.getElementById("btnDividir");
const btnPotencia =  document.getElementById("btnPotencia");
const btnLimpiar = document.getElementById("btnLimpiar");

//Zona resultado-Mensaje
const salidaResultado = document.getElementById("resultado");
const salidaMensaje = document.getElementById("mensaje");



//Comprobacion si alguno de los 2 no es valido

function leerNumeros(){

    //Funciones para cuando hagamoms un event listener llamarlo

    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value); //Hacemos que las funciones n1 o n2 sean los numeros insertados por el usuario para utilizarlos despues
    if (isNaN(n1) || isNaN(n2)){

    //Si hay errores, devolvemos null
    return null;
    }

//Si todo esta bien, devolvemos ambos numeros

    return{

    n1 : n1,
    n2 : n2
    }; 
}




//Paso Suma

function sumar(a,b){
    return a + b;
}

//Paso resta
function restar(a,b){
    return a - b;
}

//Paso Multiplicacion

function Multiplicacion(a,b){
    return a * b;
}


//Paso division 

function division(a,b){

    //No se divide entre 0
    if(b===0){
        return null;
    }
    return a/b;
}

function btnPotencia (a,b){
    //
    return a**b;
}

//Mostramos datos por pantalla 

function mostrarSalida(valor, mensaje){

    //Si no pasan mensajes, usamos texto vacio

    if(mensaje === undefined){
        mensaje = "";
    }

    //Mostramos resultado

    salidaResultado.textContent = valor;

    //Mostramos mensaje

    salidaMensaje.textContent = mensaje;
}


function ejecutarOperacion(operacion){

    //Leemos los numeros

    const datos = leerNumeros();

    //Si hay errores al leer

    if(datos === null){
        mostrarSalida("-", "Debes introducir numeros validos")
    
        //Salimos de la funcion

        return;
    }
    //Sacamos valores del objeto

    const n1 = datos.n1;
    const n2 = datos.n2;


    //Ejecutamos la funcion 

    const resultado = operacion(n1,n2);

    //Si la operacion devuelve null , da error 

    if (resultado === null){
        mostrarSalida("-","No se puede realizar esta operacion");
        
        return;
    }
    //Si todo va bien 

    mostrarSalida(resultado, "Operacion realizada correctamente. ");
}


btnSumar.addEventListener("click", function () {

    ejecutarOperacion(sumar);

});


btnRestar.addEventListener("click", function () {

    ejecutarOperacion(restar);

});

btnMultiplicar.addEventListener("click", function () {

    ejecutarOperacion(Multiplicacion);

});


btnDividir.addEventListener("click", function () {

    ejecutarOperacion(division);

});

bt.addEventListener("click", function () {

    ejecutarOperacion(potencia);

});


btnLimpiar.addEventListener("click", function (){


    inputNum1.value = "";
    inputNum2.value = "";

    mostrarSalida("-","");

    inputNum1.focus;

});


mostrarSalida("-","Introduce dos numeros, y realice una operacion");