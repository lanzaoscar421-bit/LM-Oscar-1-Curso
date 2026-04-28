window.addEventListener("load", iniciarPagina);

function iniciarPagina(){

    let inicioSesion = sessionStorage.getItem("inicioSesion");
    if (inicioSesion === "true"){

        return;
    }else{
        pedirDatos();
    }
};

function pedirDatos(){

    let usuario = prompt("Introduce el nombre del usuairio")
    let contraseña = prompt("Introduce la contraseña")

    comprobarDatos(usuario, contraseña);
};

function comprobarDatos(usuario, contraseña){


    let usuarioCorrecto =  "admin";
    let contraseñaCorrecta = "1234";

    if(usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){
        
        sessionStorage.setItem("inicioSesion", "true");
    
    }else{
        
        window.location.href ="error.html";
    }


};