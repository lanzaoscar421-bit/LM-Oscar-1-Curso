//Primera Fila
const inputNombre = document.getElementById("nombre");
const inputApellidos = document.getElementById("apellidos");

//Segunda fila

const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");

//Tercera Fila

const inputFechaNacimiento = document.getElementById("fechaNacimiento");
const inputProvincia = document.getElementById("provincia");

//Seguridad
const inputPassword = document.getElementById("password");
const inputPassword2 = document.getElementById("password2");

//Formulario
const form = document.getElementById("formRegistro");
const btnReset = document.getElementById("btnReset");




//Hacemos una general para que lea el texto

function leerTexto(input){

    return input.value.trim();

}


//Funcion Interfaz
function mostrarError(idError, mensaje){
    document.getElementById(idError).textContent = mensaje;
}

function limpiarError(idError){
    document.getElementById(idError).textContent = "";
}

function actualizarEstadoGeneral(texto, correcto){
    const estado = document.getElementById("estadoTexto");
    estado.textContent = texto;
    estado.style.color = correcto ? "green" : "red";
}


//Primera fila

//Funcion para validar el nombre

function validarNombre(){

    const nombre = leerTexto(inputNombre);
    limpiarError("error nombre");

    if (nombre.lenght<2 || nombre.lenght>30){
        
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
    limpiarError("errorApellidos");


    if(apellidos.leght<2 || apellidos.leght>60){

        return false;
    }
    
    return true;
}


//Segunda Fila 


//Funcion para validar el correo electronico


function validarEmail(){

    const email = leerTexto(inputEmail);
    limpiarError("errorEmail");

    const caracteresEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!caracteresEmail.test(email)){

        return false;
    }

    return true;
}

//Funcion para validar el telefono 

function validarTelefono (){

    limpiarError("errorTelefono");
    const telefono = leerTexto(inputTelefono);

    const telefonoDigitos = /^\d{9}$/;


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
    limpiarError("errorFecha");

    if(!inputFechaNacimiento.value){
        mostrarError("errorFecha","Selecciona una fecha");
        return false;
    }

    const fechaNacimiento = new Date(inputFechaNacimiento.value);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())){
        edad--;
    }

    if(edad < 18){
        mostrarError("errorFecha","Debes ser mayor de edad");
        return false;
    }

    return true;
}

//Funcion para validar Provincia

function validarProvincia(){

     limpiarError("errorProvincia");

    if(inputProvincia.value === ""){
        mostrarError("errorProvincia","Selecciona una provincia");
        return false;
    }

    return true;
}

//Validar contraseña1

function validarPassword(){
    const pass = leerTexto(inputPassword);

    limpiarError("error password");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if(!regex.test(pass)){
        mostrarError("errorPassword","Mín 8 + mayúscula + minúscula + número + símbolo");
        return false;
    }

    return true;
}


//Validar contraseña2

function validarPassword2(){
    limpiarError("errorPassword2");

    if(leerTexto(inputPassword2) !== leerTexto(inputPassword)){
        mostrarError("errorPassword2","No coinciden");
        return false;
    }
}

//Observaciobnes
function validarObservaciones(){
    limpiarError("errorObs");

    if(leerTexto(inputObservaciones).length > 200){
        mostrarError("errorObs","Máx 200 caracteres");
        return false;
    }

    return true;
}


//Validar terminos

function validarTerminos(){
    limpiarError("errorTerminos");

    if(!inputTerminos.checked){
        mostrarError("errorTerminos","Debes aceptar términos");
        return false;
    }

    return true;
}

//Limpiar formulario
function limpiarFormulario(){
    limpiarError("errorNombre");
    limpiarError("errorApellidos");
    limpiarError("errorEmail");
    limpiarError("errorTelefono");
    limpiarError("errorFecha");
    limpiarError("errorProvincia");
    limpiarError("errorPassword");
    limpiarError("errorPassword2");
    limpiarError("errorObs");
    limpiarError("errorTerminos");

    generarResumenErrores([]);
    actualizarEstadoGeneral("Pendiente de validación", false);
}


//Eventos
form.addEventListener("submit", function(e){
    e.preventDefault();

    if(validarFormulario()){
        alert("Formulario enviado correctamente");
        form.reset();
        limpiarFormulario();
    }
});

btnReset.addEventListener("click", function(){
    limpiarFormulario();
});