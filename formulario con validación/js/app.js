//Primera Fila
const inputNombre = document.getElementById("nombre");
const inputApellidos = document.getElementById("apellidos");

//Segunda fila

const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");

//Tercera Fila

const inputFechaNacimiento = document.getElementById("fechaNacimiento");
const inputProvincia = document.getElementById("provincia");




//Hacemos una general para que lea el texto

function leerTexto(input){

    return input.value.trim();

}

//Primera fila

//Funcion para validar el nombre

function validarNombre(){

    const nombre = leerTexto(inputNombre);

    if (nombre.leght<2 || nombre.leght>20){
        
        return false;
    }

    const caracteresNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;


    if (!caracteresNombre.test(nombre)){

        return false;
    }

    return true;
}

//Funcion para validar los apellidos los apelllidos

function validarApellidos(){

    const apellidos = leerTexto(inputApellidos);


    if(apellidos.leght<2 || apellidos.leght>60){

        return false;
    }
    
    return true;
}


//Segunda Fila 


//Funcion para validar el correo electronico


function validarEmail(){

    const email = leerTexto(inputEmail);

    const caracteresEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!caracteresEmail.test(email)){

        return false;
    }

    return true;
}

//Funcion para validar el telefono 

function validarTelefono (){

    const telefono = leerTexto(inputEmail);

    const telefonoDigitos = /\d/;


    if(telefono>9 || telefono<9){

        return false;
    }
    if(!telefonoDigitos.test(telefono)){

        return false;
    }

    return true;
}

//Tercera Fila


//Funcion Validar Fecha de nacimiento

function validarFechaNacimiento(){



}


//Funcion para validar Provincia

function validarProvincia(){

}