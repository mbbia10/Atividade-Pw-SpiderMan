document.addEventListener("DOMContentLoaded", function () {
    const botaoEnviar = document.querySelector(".btn");

    if (botaoEnviar) {
        botaoEnviar.addEventListener("click", function () {
            window.location.href = "index2.html";
        });
    }
});
