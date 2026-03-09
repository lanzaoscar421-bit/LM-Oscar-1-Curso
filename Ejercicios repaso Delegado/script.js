const texto = document.getElementById('texto');
const boton1 = document.getElementById("button1");

boton1.addEventListener('click', () => {
    console.log('¡El botón  fue presionado!');
    

    var edadUsuario = parseInt(prompt("Inserte su edad"))

     if (edadUsuario > 100) {
        texto.textContent = 'Tu eres tonto';
    } else if (edadUsuario < 18) {
        texto.textContent = 'Eres menor de edad';
    } else {
        texto.textContent = 'Eres mayor de edad';
    }


});


