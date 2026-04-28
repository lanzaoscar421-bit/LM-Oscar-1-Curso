

// =========================
// LOGIN SIMPLE
// =========================

const EMAIL_CORRECTO = "admin@pizza.com";
const PASSWORD_CORRECTA = "1234";

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === EMAIL_CORRECTO && password === PASSWORD_CORRECTA) {

            sessionStorage.setItem("login", "true");
            window.location.href = "index.html";

        } else {
            alert("Email o contraseña incorrectos");
        }
    });
}