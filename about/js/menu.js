document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const dropdowns = document.querySelectorAll(".group");

    // Toggle menú hamburguesa
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    // Lógica de submenús
    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector("button");
        const submenu = dropdown.querySelector(".submenu");

        submenu.classList.add("hidden"); // Asegurar que empiece oculto

        button.addEventListener("click", function (event) {
            event.stopPropagation();
            submenu.classList.toggle("hidden");
        });

        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                submenu.classList.add("hidden");
            }
        });
    });
});