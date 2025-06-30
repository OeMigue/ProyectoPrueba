const btn = document.getElementById("modoOscuroBtn");
const body = document.body;

if (localStorage.getItem("modo") === "oscuro") {
body.classList.add("dark-mode");
btn.classList.remove("btn-outline-light");
btn.classList.add("btn-outline-warning");
btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

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



document.addEventListener("DOMContentLoaded", function () {
    const cantidadInputs = document.querySelectorAll(".cantidad-input");
    const subtotalSpan = document.getElementById("subtotal");
    const totalSpan = document.getElementById("total");
    const envio = 15000;
    function formatearNumero(numero) {
    return numero.toLocaleString("es-CO");
}
    function actualizarResumen() {
    let subtotal = 0;
    cantidadInputs.forEach((input) => {
        const precio = parseFloat(input.dataset.precio);
        const cantidad = parseInt(input.value);
        subtotal += precio * cantidad;
});
const total = subtotal + envio;
    subtotalSpan.textContent = formatearNumero(subtotal);
    totalSpan.textContent = formatearNumero(total);
}
    cantidadInputs.forEach((input) => {
    input.addEventListener("input", actualizarResumen);
});

    actualizarResumen();
});