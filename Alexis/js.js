// Selección de elementos
const btn = document.getElementById("modoOscuroBtn");
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem("modo") === "oscuro") {
body.classList.add("dark-mode");
btn.classList.remove("btn-outline-light");
btn.classList.add("btn-outline-warning");
btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

// Evento para alternar modo
btn.addEventListener("click", () => {
body.classList.toggle("dark-mode");
const esOscuro = body.classList.contains("dark-mode");

btn.classList.toggle("btn-outline-light");
btn.classList.toggle("btn-outline-warning");
btn.innerHTML = esOscuro
    ? '<i class="bi bi-sun-fill"></i>'
    : '<i class="bi bi-moon-fill"></i>';

localStorage.setItem("modo", esOscuro ? "oscuro" : "claro");
});