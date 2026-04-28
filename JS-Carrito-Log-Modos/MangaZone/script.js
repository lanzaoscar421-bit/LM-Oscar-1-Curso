const tarjetas = document.querySelectorAll(".mangaCard")
const listaCarrito = document.querySelector("#listaCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let descuentoAplicado = 0;


const formularioDescuento = document.querySelector("#formCupon")
const inputDescuento = document.querySelector("#inputCupon")

function anadirAlCarrito(id,nombre,precio){

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

tarjetas.forEach(tarjeta => {

    const botonAnadir = tarjeta.querySelector(".btnAdd");
    //Tiene que ser el boton de añadir del index

    botonAnadir.addEventListener("click", () => {

        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.nombre;
        const precio = parseFloat(tarjeta.dataset.precio);
        //Esto hay que fijarse en los prodcutos
        //data-id="m1"
        // data-nombre="Tokyo Revengers"
        // data-precio="8.50"
        anadirAlCarrito(id, nombre, precio);
        
    
    });
});


function mostrarCarrito(){

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

        boton.addEventListener("click",() =>{

            const id = boton.dataset.id
            eliminarDelCarrito(id)
        })
    })


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

if(formularioDescuento){

        formularioDescuento.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const codigo = inputDescuento.value.trim().toLocaleUpperCase();

        if(codigo === "NOSE"){
            descuentoAplicado = 0.10;
        }else{
            descuentoAplicado = 0;
        }
    
        calcularTotal();
    })

}




document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
});
