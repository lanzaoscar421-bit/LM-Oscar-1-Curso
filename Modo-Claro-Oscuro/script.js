const botoTema = document.getElementById("toggleTema")
const body = document.body;

botoTema.addEventListener("click", () =>{

    body.classList.toggle("oscuro");
    
    if (body.classList.contains("oscuro")){

        botoTema.textContent= "Cambiar a modo claro";
    }else {

        botoTema.textContent = "Cambiar a modo oscuro";
    }
})