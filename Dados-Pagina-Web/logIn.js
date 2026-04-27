window.addEventListener("load", iniciarPagina)

function iniciarPagina(){

    let inicioSesion = sessionStorage.getItem("inicioSesion");

    if(inicioSesion === "true"){
        return;
    }else{
        pedirDatos();
    }

}

function pedirDatos(){

    let usuario = prompt("Introduzca su nombre")
    let contraseña = prompt("Introduzca su contraseña")

    comprobarDatos(usuario, contraseña);

}


function comprobarDatos(usuario, contraseña){

    let usuarioCorrecto = "admin"
    let contraseñaCorrecta = "1234"


    if(usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){

        sessionStorage.setItem("inicioSesion", "true");

    }else{

        window.location.href="error.html";
    }

}


    // function comprobarDatosConMasUsuarios(usuario, contraseña){

    //     // Lista de usuarios
    //     let usuarios = [
    //         { usuario: "admin", contraseña: "1234" },
    //         { usuario: "oscar", contraseña: "0000" },
    //         { usuario: "juan", contraseña: "abcd" }
    //     ];

    //     // Buscar si existe un usuario que coincida
    //     let encontrado = usuarios.find(u => 
    //         u.usuario === usuario && u.contraseña === contraseña
    //     );

    //     if(encontrado){
    //         sessionStorage.setItem("inicioSesion", "true");
    //         sessionStorage.setItem("usuarioActivo", usuario);
    //     }else{
    //         window.location.href = "error.html";
    //     }

    // }