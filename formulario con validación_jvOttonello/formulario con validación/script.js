// =============================
// FORMULARIO
// =============================
const formRegistro = document.getElementById("formRegistro");

// =============================
// ESTADO GENERAL
// =============================
const estadoGeneral = document.getElementById("estadoGeneral");
const estadoTexto = document.getElementById("estadoTexto");

// =============================
// CAMPOS DATOS PERSONALES
// =============================
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const provincia = document.getElementById("provincia");

// =============================
// CONTRASEÑAS
// =============================
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// =============================
// OTROS CAMPOS
// =============================
const observaciones = document.getElementById("observaciones");
const newsletter = document.getElementById("newsletter");
const terminos = document.getElementById("terminos");

// =============================
// MENSAJES DE ERROR
// =============================
const errorNombre = document.getElementById("errorNombre");
const errorApellidos = document.getElementById("errorApellidos");
const errorEmail = document.getElementById("errorEmail");
const errorTelefono = document.getElementById("errorTelefono");
const errorFecha = document.getElementById("errorFecha");
const errorProvincia = document.getElementById("errorProvincia");
const errorPassword = document.getElementById("errorPassword");
const errorPassword2 = document.getElementById("errorPassword2");
const errorObs = document.getElementById("errorObs");
const errorTerminos = document.getElementById("errorTerminos");

// =============================
// RESUMEN VALIDACIÓN
// =============================
const resumen = document.getElementById("resumen");
const listaErrores = document.getElementById("listaErrores");

// =============================
// BOTONES
// =============================
const btnEnviar = document.getElementById("btnEnviar");
const btnReset = document.getElementById("btnReset");
// -------------------------------------

// addEventsListener de input, para que se quede todo el rato escuchando
nombre.addEventListener("input", validarNombre);
apellidos.addEventListener("input", validarApellidos);
email.addEventListener("input", validarEmail);
telefono.addEventListener("input", validarTelefono);
fechaNacimiento.addEventListener("input", validarFecha);
provincia.addEventListener("input", validarProvincia);
password.addEventListener("input", validarPassword);
password2.addEventListener("input", validarPassword2);



// addEventListener de formRegistro para submit
formRegistro.addEventListener("submit", (e) => {

  e.preventDefault();

  if (validarFormulario()) {
    estadoTexto.textContent = "Formulario válido ✅";
    resumen.innerHTML = `<li><ol>"En tramitación, espere a su supervisión"</ol></li>`;

  } else {
    estadoTexto.textContent = "Hay errores en el formulario, corrijalos y reintentelo nuevamente❌";
  }

})

//VALIDADORES--------------------
function validarNombre() { //nombre

  const valor = nombre.value.trim(); //obtener valor con espacios quitados
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,30}$/; //patron 

  if (!regex.test(valor)) { //comprobar valor
    //mensaje de error + resaltar campo
    errorNombre.textContent = "Nombre no válido";
    marcarCampo(nombre, false);
    return false;
  }

  //en caso contrario
  errorNombre.textContent = "";
  marcarCampo(nombre, true);
  return true;
}

function validarApellidos() {
  const valor = apellidos.value.trim();

  if (valor.length < 2 || valor.length > 60) {
    //mensaje de error + resaltar campo
    errorApellidos.textContent = "Entre 2 y 60 caracteres.";
    marcarCampo(apellidos, false);
    return false;
  }
//en caso contrario
  errorApellidos.textContent = "";
  marcarCampo(apellidos, true);
  return true;
}


function validarEmail() {
  const valor = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //mensaje de error + resaltar campo
  if (!regex.test(valor)) {
    errorEmail.textContent = "Email no válido.";
    marcarCampo(email, false);
    return false;
  }

  //en caso contrario
  errorEmail.textContent = "";
  marcarCampo(email, true);
  return true;
}

function validarTelefono() {
  const regex = /^[0-9]{9}$/;

  //mensaje de error + resaltar campo
  if (!regex.test(telefono.value)) {
    errorTelefono.textContent = "Debe tener 9 números.";
    marcarCampo(telefono, false);
    return false;
  }

  //en caso contrario
  errorTelefono.textContent = "";
  marcarCampo(telefono, true);
  return true;
}

function validarFecha() {

  const fecha = new Date(fechaNacimiento.value);
  const hoy = new Date();

  let edad = hoy.getFullYear() - fecha.getFullYear();
  const m = hoy.getMonth() - fecha.getMonth();

  //comprobar mes es menor a 0 O si mes es 0 Y la fecha actual es menor a la fecha de nacimiento
  if (m < 0 || (m === 0 && hoy.getDate() < fecha.getDate())) {
    edad--; //restarle 1 a la edad
  }

  if (!fechaNacimiento.value || edad < 18) {
    //mensaje de error + resaltar campo
    errorFecha.textContent = "Debes ser mayor de edad.";
    marcarCampo(fechaNacimiento, false);
    return false;
  }
//en caso contrario
  errorFecha.textContent = "";
  marcarCampo(fechaNacimiento, true);
  return true;
}


function validarProvincia() {

  if (provincia.value === "") {
    //mensaje de error + resaltar campo
    errorProvincia.textContent = "Selecciona una provincia.";
    marcarCampo(provincia, false);
    return false;
  }
//en caso contrario
  errorProvincia.textContent = "";
  marcarCampo(provincia, true);
  return true;
}


function validarPassword() {

  const valor = password.value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!regex.test(valor)) {
    //mensaje de error + resaltar campo
    errorPassword.textContent = "Mín 8 caracteres con mayúscula, minúscula, número y símbolo.";
    marcarCampo(password, false);
    return false;
  }

//en caso contrario
  errorPassword.textContent = "";
  marcarCampo(password, true);
  return true;
}


function validarPassword2() {

  if (password2.value !== password.value || password2.value === "") { //comprobar igualdad valores contraseña
    //mensaje de error + resaltar campo
    errorPassword2.textContent = "Las contraseñas no coinciden.";
    marcarCampo(password2, false);
    return false;
  }

//en caso contrario
  errorPassword2.textContent = "";
  marcarCampo(password2, true);
  return true;
}

function validarTerminos() {

  if (!terminos.checked) {
    //mensaje de error + resaltar campo
    errorTerminos.textContent = "Debes aceptar los términos.";
    marcarCampo(terminos, false);
    return false;
  }

  //en caso contrario
  errorTerminos.textContent = "";
  marcarCampo(terminos, true);
  return true;
}


// FUNCIONES AUXILIARES
function marcarCampo(input, valido) { //marcar campos, verde|rojo

  const contenedor = input.closest(".field"); //valor más cercano a la clase field

  contenedor.classList.remove("ok", "error"); //quitar lista clase ok/error

  if (valido) {
    //VALIDO
    contenedor.classList.add("ok");//añadir ok
    contenedor.style.backgroundColor = "#e6ffe6";//cambiar color fondo a verde
    
  } else {
    //INCORRECTO
    contenedor.classList.add("error");//añadir error
    contenedor.style.backgroundColor = "#f7aeae";//cambiar color fondo a rojo
  }
}

function validarFormulario() { //validar formulario

  const v1 = validarNombre(); //nombre
  const v2 = validarApellidos(); //apellido
  const v3 = validarEmail(); //email
  const v4 = validarTelefono(); //telefono
  const v5 = validarFecha(); //fecha
  const v6 = validarProvincia(); //provincia
  const v7 = validarPassword(); //contraseña1
  const v8 = validarPassword2(); //contraseña2
  const v9 = validarTerminos(); //validar terminos (campo)

  return v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9;
};

btnReset.addEventListener("click", () => { //al hacer click en el boton reset
location.reload(); //recargar la página
});




