console.log('Manin esto funciona');
//Constantes
const inputTarea = document.getElementById("tarea");
const btnAgregar = document.getElementById("btnAgregar");
const btnVaciar = document.getElementById("btnVaciar");
const listaTareas = document.getElementById("listaTareas");
const totalTareas = document.getElementById("totalTareas");
const tareasCompletadas = document.getElementById("tareasCompletadas");
const tareasPendientes = document.getElementById("tareasPendientes");


//Funciones

function obtenerTextoTarea(){
    return inputTarea.value.trim(); //Trim espacios para el principio y final

};

//Limpiamos Input
function limpiarInput (){

    inputTarea.value = "";

};

//Funcion agrear tarea Dom
function agregarTareaAlDom (texto){

    const li = document.createElement("li");
    li.classList.add("tarea");

    //Hacer tareas estilo del css

    const span = document.createElement("span");
    span.textContent = texto;


    //Añadir botones

    const divAcciones = document.createElement("div");
    divAcciones.classList.add("acciones-tarea");




    const btnCompletar = document.createElement("button");


    btnCompletar.textContent = "Completar";
    btnCompletar.classList.add("btn-completar")



    const btnEliminar = document.createElement ("button")

    btnEliminar.textContent = "Eliminar"
    btnEliminar.classList.add("btn-eliminar")

    btnCompletar.addEventListener("click",

    function(){
        li.classList.toggle("completada")
        actualizarContadores();
        
        }
    )


    btnEliminar.addEventListener("click",
        function (){

            li.remove();
            actualizarContadores();
        }
    )

    divAcciones.appendChild(btnCompletar)
    divAcciones.appendChild(btnEliminar)


    li.appendChild(span)
    li.appendChild(divAcciones)

    listaTareas.appendChild(li);
};

//Obtener tarea completa event Listener
btnAgregar.addEventListener("click", 
    function(){
        const texto = obtenerTextoTarea();
        
        if(texto === ""){
            return;
        }
        agregarTareaAlDom(texto);
        actualizarContadores();
        limpiarInput();
    }

);


// funcion contar Tareas
// function actualizarTotal () {
    
//     const numeroTareas = listaTareas.children.length;

//     totalTareas.textContent = numeroTareas;

// }


//Actualizar  todos los contadores de las tareas
function actualizarContadores(){

    const tareas = listaTareas.children.length;
    const completadas = document.querySelectorAll(".tarea.completada").length
    const pendientes = tareas - completadas;

    totalTareas.textContent = tareas
    tareasCompletadas.textContent = completadas
    tareasPendientes.textContent = pendientes

}


function vaciarLista (){


    listaTareas.innerHTML = "";

    actualizarContadores();
}


//Declaramos el event listener para llamar
btnVaciar.addEventListener("click",
    function (){
        vaciarLista();
    }
);

