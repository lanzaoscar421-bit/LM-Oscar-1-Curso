//modoToggle

const botontema = document.getElementById("modoToggle")
const body = document.body


botontema.addEventListener("click", () => {

    body.classList.toggle("light")

    if (body.classList.contains("light")){

        botontema.textContent= "Cambiar a modo oscuro";
    }else {

        botontema.textContent = "Cambiar a modo claro";
    }

})




// tarjetas → todos los juegos de la tienda
// listaCarrito → el sitio donde se pinta el carrito

const tarjetas = document.querySelectorAll(".gameCard")
const listaCarrito = document.querySelector("#gameCartList")


//
const totalPrecio = document.querySelector("#gameTotal")


//
const formularioDescuento = document.querySelector("#couponForm")
const inputDescuento = document.querySelector("#couponInput")


let descuentoAplicado = 0;

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// localStorage.getItem("carrito") → lee lo guardado
// JSON.parse() → lo convierte a objeto JavaScript
// || [] → si no hay nada, crea un array vacío

// “carga el carrito si existe, si no empieza vacío”


function anadirAlCarrito(id,nombre,precio){

     const productoExistente = carrito.find(producto => producto.id === id);

    if (productoExistente) {
        productoExistente.unidades++;
    } else {
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

tarjetas.forEach(tarjeta => {

    const botonAnadir = tarjeta.querySelector('[data-action="add"]');

    botonAnadir.addEventListener("click", () => {

        const id = tarjeta.dataset.gameId;
        const nombre = tarjeta.dataset.gameName;
        const precio = parseFloat(tarjeta.dataset.gamePrice);

        anadirAlCarrito(id, nombre, precio);
        
    
    });
});


function mostrarCarrito() {

    if (!listaCarrito) return;

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

        boton.addEventListener("click", () =>{

            const id = boton.dataset.id
            eliminarDelCarrito(id)
        })
    })


}

function eliminarDelCarrito(id){

    const posicion = carrito.findIndex(producto => producto.id === id);

    if (posicion !== -1) {

        if (carrito[posicion].unidades > 1) {
            carrito[posicion].unidades--;
        } else {
            carrito.splice(posicion, 1);
        }
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
     mostrarCarrito();
     calcularTotal();
}



function calcularTotal(){


    let total = 0;

    carrito.forEach(producto =>{

        total += producto.precio * producto.unidades;
    })

   if (descuentoAplicado > 0) {
        total = total * 0.9;
    }

    if(totalPrecio){
        totalPrecio.textContent = total +  "€"
    }
}


if(formularioDescuento){

    formularioDescuento.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const codigo = inputDescuento.value.trim().toLocaleUpperCase();

        if(codigo === "PIZZA10"){
            descuentoAplicado = 0.10;
        }else{
            descuentoAplicado = 0;
        }
    
        calcularTotal();
    })
}


document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
    calcularTotal()
});

