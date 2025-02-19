document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".group");

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
