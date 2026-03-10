console.log("Mi script funciona");

document.addEventListener('DOMContentLoaded', () => {

    const mensaje = document.getElementById('mensaje');

    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const boton3 = document.getElementById('boton3');
    const boton4 = document.getElementById('boton4');
    const boton5 = document.getElementById('boton5');
    const boton6 = document.getElementById('boton6');
    const boton7 = document.getElementById('boton7');
    const boton8 = document.getElementById('boton8');
    const boton9 = document.getElementById('boton9');
    const boton10 = document.getElementById('boton10');
    const boton11 = document.getElementById('boton11');
    const boton12 = document.getElementById('boton12');
    const boton13 = document.getElementById('boton13');
    const boton14 = document.getElementById('boton14');
    const boton15 = document.getElementById('boton15');
    const boton16 = document.getElementById('boton16');
    const boton17 = document.getElementById('boton17');
    const boton18 = document.getElementById('boton18');
    const boton19 = document.getElementById('boton19');
    const boton20 = document.getElementById('boton20');
    const boton21 = document.getElementById('boton21');
    const boton22 = document.getElementById('boton22');
    const boton23 = document.getElementById('boton23');
    const boton24 = document.getElementById('boton24');
    const boton25 = document.getElementById('boton25');
    const boton26 = document.getElementById('boton26');
    const boton27 = document.getElementById('boton27');
    const boton28 = document.getElementById('boton28');
    const boton29 = document.getElementById('boton29');
    const boton30 = document.getElementById('boton30');

    // ================= EJERCICIOS ====================

    // 1. Mayor de edad
    boton1.addEventListener('click', () => {
        let edad = parseInt(prompt("Introduce tu edad"));
        if (edad >= 18) {
            mensaje.textContent = "Eres mayor de edad";
        } else {
            mensaje.textContent = "No eres mayor de edad";
        }
    });

    // 2. Mayor o menor de edad
    boton2.addEventListener('click', () => {
        let edad = parseInt(prompt("Introduce tu edad"));
        mensaje.textContent = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
    });

    // 3. 20 primeros números naturales
    boton3.addEventListener('click', () => {
        let texto = "";
        for (let i = 1; i <= 20; i++) texto += i + " ";
        mensaje.textContent = texto;
    });

    // 4. Pares 2 en 2 hasta 200
    boton4.addEventListener('click', () => {
        let texto = "";
        for (let i = 2; i <= 200; i += 2) texto += i + " ";
        mensaje.textContent = texto;
    });

    // 5. Pares 1 en 1 hasta 200
    boton5.addEventListener('click', () => {
        let texto = "";
        for (let i = 1; i <= 200; i++) if (i % 2 == 0) texto += i + " ";
        mensaje.textContent = texto;
    });

    // 6. Números hasta N
    boton6.addEventListener('click', () => {
        let n = parseInt(prompt("Introduce un número N"));
        let texto = "";
        for (let i = 1; i <= n; i++) texto += i + " ";
        mensaje.textContent = texto;
    });

    // 7. Calificación alfabética
    boton7.addEventListener('click', () => {
        let nota = parseFloat(prompt("Introduce la nota (0-10)"));
        if (nota < 3) mensaje.textContent = "Muy Deficiente";
        else if (nota < 5) mensaje.textContent = "Insuficiente";
        else if (nota < 6) mensaje.textContent = "Bien";
        else if (nota < 9) mensaje.textContent = "Notable";
        else mensaje.textContent = "Sobresaliente";
    });

    // 8. Factorial
    boton8.addEventListener('click', () => {
        let n = parseInt(prompt("Introduce un número"));
        let fact = 1;
        for (let i = 1; i <= n; i++) fact *= i;
        mensaje.textContent = "Factorial = " + fact;
    });

    // 9. Sumar un segundo a hora
    boton9.addEventListener('click', () => {
        let h = parseInt(prompt("Hora"));
        let m = parseInt(prompt("Minutos"));
        let s = parseInt(prompt("Segundos"));
        s++;
        if (s == 60) { s = 0; m++; }
        if (m == 60) { m = 0; h++; }
        if (h == 24) { h = 0; }
        mensaje.textContent = `${h}:${m}:${s}`;
    });

    // 10. Números negativos
    boton10.addEventListener('click', () => {
        let negativo = false;
        for (let i = 0; i < 10; i++) {
            let num = parseInt(prompt("Introduce un número"));
            if (num < 0) negativo = true;
        }
        mensaje.textContent = negativo ? "Hay números negativos" : "No hay números negativos";
    });

    // 11. Contar positivos y negativos
    boton11.addEventListener('click', () => {
        let pos = 0, neg = 0;
        for (let i = 0; i < 10; i++) {
            let num = parseInt(prompt("Introduce un número"));
            if (num > 0) pos++; else neg++;
        }
        mensaje.textContent = `Positivos: ${pos} Negativos: ${neg}`;
    });

    // 12. Secuencia hasta 0
    boton12.addEventListener('click', () => {
        let pos = 0, neg = 0, num;
        do {
            num = parseInt(prompt("Introduce un número (0 para terminar)"));
            if (num > 0) pos++;
            if (num < 0) neg++;
        } while (num != 0);
        mensaje.textContent = `Positivos: ${pos} Negativos: ${neg}`;
    });

    // 13. Suma y producto 10 números
    boton13.addEventListener('click', () => {
        let suma = 0, producto = 1;
        for (let i = 1; i <= 10; i++) {
            let n = parseInt(prompt("Introduce un número"));
            suma += n; producto *= n;
        }
        mensaje.textContent = `Suma: ${suma} Producto: ${producto}`;
    });

    // 14. Salario neto (simplificado)
    boton14.addEventListener('click', () => {
        let horas = parseFloat(prompt("Horas trabajadas"));
        let tarifa = parseFloat(prompt("Tarifa por hora"));
        let salario = (horas <= 35) ? horas * tarifa : 35 * tarifa + (horas - 35) * tarifa * 1.5;
        mensaje.textContent = `Salario bruto: ${salario}€`;
    });

    // 15. Par o impar
    boton15.addEventListener('click', () => {
        let num = parseInt(prompt("Introduce un número"));
        mensaje.textContent = (num % 2 == 0) ? "Par" : "Impar";
    });

    // 16. Mayor entre dos
    boton16.addEventListener('click', () => {
        let a = parseInt(prompt("Número 1"));
        let b = parseInt(prompt("Número 2"));
        mensaje.textContent = "Mayor: " + Math.max(a, b);
    });

    // 17. Mayor de tres
    boton17.addEventListener('click', () => {
        let a = parseInt(prompt("Número 1"));
        let b = parseInt(prompt("Número 2"));
        let c = parseInt(prompt("Número 3"));
        mensaje.textContent = "Mayor: " + Math.max(a, b, c);
    });

    // 18. Tabla de multiplicar
    boton18.addEventListener('click', () => {
        let n = parseInt(prompt("Número"));
        let texto = "";
        for (let i = 1; i <= 10; i++) texto += `${n} x ${i} = ${n*i}\n`;
        mensaje.textContent = texto;
    });

    // 19. Suma 1 hasta N
    boton19.addEventListener('click', () => {
        let n = parseInt(prompt("Número"));
        let suma = 0;
        for (let i = 1; i <= n; i++) suma += i;
        mensaje.textContent = "Suma: " + suma;
    });

    // 20. Tabla 1 a 20
    boton20.addEventListener('click', () => {
        let n = parseInt(prompt("Número"));
        let texto = "";
        for (let i = 1; i <= 20; i++) texto += `${n*i} `;
        mensaje.textContent = texto;
    });

    // 21. Números 100 a 1
    boton21.addEventListener('click', () => {
        let texto = "";
        for (let i = 100; i >= 1; i--) texto += i + " ";
        mensaje.textContent = texto;
    });

    // 22. Múltiplos de 5
    boton22.addEventListener('click', () => {
        let texto = "";
        for (let i = 5; i <= 100; i += 5) texto += i + " ";
        mensaje.textContent = texto;
    });

    // 23. Suma 5 números
    boton23.addEventListener('click', () => {
        let suma = 0;
        for (let i = 0; i < 5; i++) suma += parseInt(prompt("Número"));
        mensaje.textContent = "Suma: " + suma;
    });

    // 24. Media 5 números
    boton24.addEventListener('click', () => {
        let suma = 0;
        for (let i = 0; i < 5; i++) suma += parseInt(prompt("Número"));
        mensaje.textContent = "Media: " + (suma/5);
    });

    // 25. Contar hasta -1
    boton25.addEventListener('click', () => {
        let contador = 0, num;
        do {
            num = parseInt(prompt("Número (-1 termina)"));
            if (num != -1) contador++;
        } while(num != -1);
        mensaje.textContent = "Cantidad de números introducidos: " + contador;
    });

    // 26. Suma de cifras
    boton26.addEventListener('click', () => {
        let num = parseInt(prompt("Número"));
        let suma = 0;
        while (num > 0) {
            suma += num % 10;
            num = Math.floor(num / 10);
        }
        mensaje.textContent = "Suma de cifras: " + suma;
    });

    // 27. Positivo, negativo o cero
    boton27.addEventListener('click', () => {
        let num = parseInt(prompt("Número"));
        if (num > 0) mensaje.textContent = "Positivo";
        else if (num < 0) mensaje.textContent = "Negativo";
        else mensaje.textContent = "Cero";
    });

    // 28. Divisores de un número
    boton28.addEventListener('click', () => {
        let num = parseInt(prompt("Número"));
        let texto = "";
        for (let i = 1; i <= num; i++) if (num % i == 0) texto += i + " ";
        mensaje.textContent = texto;
    });

    // 29. Número primo
    boton29.addEventListener('click', () => {
        let num = parseInt(prompt("Número"));
        let primo = true;
        if (num < 2) primo = false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) primo = false;
        }
        mensaje.textContent = primo ? "Es primo" : "No es primo";
    });

    // 30. Números impares hasta N
    boton30.addEventListener('click', () => {
        let n = parseInt(prompt("Número"));
        let texto = "";
        for (let i = 1; i <= n; i++) if (i % 2 != 0) texto += i + " ";
        mensaje.textContent = texto;
    });

});