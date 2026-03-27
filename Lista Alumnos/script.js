console.log('Manin esto funciona');

// Constantes
const inputEstudiante = document.getElementById("nuevoEstudiante");
const btnAñadir = document.getElementById("btnAñadir");
const btnLimpiar = document.getElementById("btnLimpiar");
const listaEstudiantes = document.getElementById("listaEstudiantes");
const totalEstudiantes = document.getElementById("totalEstudiantes");
const asistieron = document.getElementById("asistieron");
const noAsistieron = document.getElementById("noAsistieron");

// Funciones

function obtenerNombreEstudiante() {

    return inputEstudiante.value.trim(); //Trim espacios para el principio y final
};

    //Limpiar Input
function limpiarInput() {

    inputEstudiante.value = "";
};

//Agregar tareas al doom
function agregarEstudianteAlDom(nombre) {
    
    const li = document.createElement("li");
    li.classList.add("estudiante");

    //Hacer tareas estilo css
    const span = document.createElement("span");
    span.textContent = nombre;

    //Añadir botones
    const divBotones = document.createElement("div");
    divBotones.classList.add("acciones-estudiante");



    // Botón Asiste
    const btnAsiste = document.createElement("button");
    
    btnAsiste.textContent = "Asiste";
    btnAsiste.classList.add("btn-asiste");
    
    btnAsiste.addEventListener("click", 
        function() {
    
            li.classList.add("asistio");
            li.classList.remove("noAsistio");
            actualizarContadores();
    });

    // Botón Eliminar
    const btnEliminar = document.createElement("button");
    
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    
    btnEliminar.addEventListener("click", 
        function() {
    
            li.remove();
        
            actualizarContadores();
    });


    // Botón No Asiste
    const btnNoAsiste = document.createElement("button");
    
    btnNoAsiste.textContent = "No asiste";
    btnNoAsiste.classList.add("btn-noAsiste");
    
    btnNoAsiste.addEventListener("click", 
        function() {
    
            li.classList.remove("asistio"); 
            li.classList.add("noAsistio");
        
            actualizarContadores();


    });

    divBotones.appendChild(btnAsiste);
    divBotones.appendChild(btnEliminar);
    divBotones.appendChild(btnNoAsiste);

    li.appendChild(span);
    li.appendChild(divBotones);

    listaEstudiantes.appendChild(li);
};

// Event Listener Agregar
btnAñadir.addEventListener("click", 
    function() {
        const nombre = obtenerNombreEstudiante();

        if (nombre === "") return;
        agregarEstudianteAlDom(nombre);
        actualizarContadores();
        limpiarInput();
});

// Actualizar contadores
function actualizarContadores() {
    const total = listaEstudiantes.children.length;
    const totalAsistieron = document.querySelectorAll(".estudiante.asistio").length;
    const totalNoAsistieron = document.querySelectorAll(".estudiante.noAsistio").length;

    totalEstudiantes.textContent = total;
    asistieron.textContent = totalAsistieron;
    noAsistieron.textContent = totalNoAsistieron;
}

// Vaciar lista
function vaciarLista() {

    
    listaEstudiantes.innerHTML = "";
    
    actualizarContadores();
}

// Event Listener Vaciar
btnLimpiar.addEventListener("click", 
    function() {
        vaciarLista();
    }
);