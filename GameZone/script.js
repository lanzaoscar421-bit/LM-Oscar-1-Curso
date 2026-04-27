const tarjetas = document.querySelectorAll(".gameCard")
const listaCarrito = document.querySelector("#gameCartList")


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


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

    eliminarProducto()

}



document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
});

