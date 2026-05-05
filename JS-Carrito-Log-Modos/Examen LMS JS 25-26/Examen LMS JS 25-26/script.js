//Modo oscuro
const botonTema = document.getElementById("toggleModo")
const body = document.body


botonTema.addEventListener("click", () =>{

    body.classList.toggle("oscuro")

})



//Funcionalidad del carrito
const tarjetas = document.querySelectorAll(".card")
const listaCarrito = document.querySelector("#listaCarrito")


const formularioDescuento = document.querySelector("#formCupon")


let descuentoAplicado = 0;

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function anadirAlCarrito(id, nombre, precio){

    const productoExistente = carrito.find(producto => producto.id === id);

    if (productoExistente) {
        productoExistente.unidades++;
    }else {
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            unidades: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}


tarjetas.forEach(tarjeta =>{


    const botonAnadir = document.getElementById(".btnAdd")

    botonAnadir.addEventListener("click",() =>{

        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.nombre;
        const precio = parseFloat(tarjeta.dataset.precio);
        anadirAlCarrito(id, nombre, precio);
    })


})


//Funcion para mostrar info en el carrito
function mostrarCarrito(){

    if(!listaCarrito) return;

    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        listaCarrito.innerHTML += `
        <li class="cart-item">
            <span>${producto.nombre}</span>
            <span>${producto.precio} €</span>
            <span>${producto.unidades}</span>
            <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
        </li>
        `;
    });

    const botonesEliminar = document.querySelectorAll(".btn-eliminar")

    botonesEliminar.forEach(boton =>{

        boton.addEventListener("click",() =>{

            const id = boton.dataset.id
            eliminarDelCarrito(id)
        })
    })

    //Calculamos el total
    calcularTotal()

}


function eliminarDelCarrito(id){

    const posicion = carrito.findIndex(producto => producto.id  === id)

    if (posicion !== -1) {

        if (carrito[posicion].unidades > 1) {
            carrito[posicion].unidades--;
        } else {
            carrito.splice(posicion, 1);
        }
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    
}


const totalPrecio = document.getElementById("total")


function calcularTotal(){


    let total = 0;

    carrito.forEach(producto =>{

        total += producto.precio * producto.unidades;
    })

    if(descuentoAplicado > 0){
        total = total * (1 - descuentoAplicado);
    }

    if(totalPrecio){
        totalPrecio.textContent = total +  "€"
    }
}



function pedirDatos(){

    let usuario = prompt("Introduzca su nombre")
    let contraseña = prompt("Introduzca su contraseña")

    comprobarDatos(usuario, contraseña);

}

function comprobarDatos(usuario, contraseña){

    let usuarioCorrecto = "examen"
    let contraseñaCorrecta = "123456"


    if(usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){

        sessionStorage.setItem("inicioSesion", "true");
        
        formularioDescuento.addEventListener("submit", function(evento) {

        evento.preventDefault();

        descuentoAplicado = 0.10;
    
        calcularTotal();
    })



    }else{

        window.location.href="carrito.html";
    }

}


const botonDescuento = document.getElementById("btnDescuento")

botonDescuento.addEventListener("click", () =>{

    pedirDatos();
    comprobarDatos();

})


document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
});
