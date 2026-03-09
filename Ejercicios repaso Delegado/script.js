const texto = document.getElementById('texto');
const boton1 = document.getElementById("button1");
const boton2 = document.getElementById("button2");
const boton3 = document.getElementById("button3");
const boton4 = document.getElementById("button4");



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

boton2.addEventListener('click', () => {
    console.log('¡El botón  fue presionado!');
    

    var primerNumero = parseInt(prompt("Inserte el primer numero"))
    var segundoNumero = parseInt(prompt("Inserte el segundo numero"))


    var suma = primerNumero + segundoNumero;
    var resta = primerNumero - segundoNumero;
    var producto = primerNumero * segundoNumero;
    var division = primerNumero / segundoNumero;


    texto.textContent = 'suma: '+ suma + ' resta: ' + resta + ' producto: ' + producto + ' division: ' + division;

});

boton3.addEventListener('click', () => {
    console.log('¡El botón  fue presionado!');
    

   for (let i = 1; i <= 20; i++) {
    texto.textContent += i + "";
    }

});

boton4.addEventListener('click', () => {
    console.log('¡El botón  fue presionado!');

    var usuarioEligeNumero = parseInt(prompt("Inserta un numero"))

    

   for (let i = 1; i <= usuarioEligeNumero; i++) {
    texto.textContent += i + "";
    }

});




