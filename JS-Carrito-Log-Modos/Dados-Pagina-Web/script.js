let boton = document.getElementById("btnLanzar")
let resultado = document.getElementById("resultado")
let imagen = document.getElementById("imagenResultado")

boton.addEventListener("click", function(){

    let dado = Math.floor(Math.random() * 6) + 1;

    resultado.textContent = "Salio el numero " + dado;


    resultado.src = ""


    if (dado === 1){
        imagen.src = "Dados/1Cara.png"

    }else if (dado === 2){
        imagen.src = "Dados/2Cara.png"
    }else if (dado === 3){
        imagen.src = "Dados/3Cara.png"
    }else if (dado === 4){
        imagen.src = "Dados/4Cara.png"
    }else if (dado === 5){
        imagen.src = "Dados/5Cara.png"
    }else{
        imagen.src = "Dados/6Cara.png"
    }

})


// Funciones para modo oscuro
const botonTema = document.getElementById("toggleTema")
const body = document.body


botonTema.addEventListener("click", () =>{

    body.classList.toggle("oscuro")

    if (body.classList.contains("oscuro")){

        botoTema.textContent= "Cambiar a modo claro";
    }else {

        botoTema.textContent = "Cambiar a modo oscuro";
    }

})


