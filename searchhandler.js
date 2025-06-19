document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("globalSearchInput");
    const button = document.getElementById("globalSearchBtn");

    // Verificación de existencia para evitar errores si no hay buscador en la página
    if (!input || !button) return;

    function searchContent(term) {
        const textElements = document.querySelectorAll("h1, h2, h3, p, li, span, a");
        let found = false;

        textElements.forEach((el) => {
            if (el.textContent.toLowerCase().includes(term.toLowerCase())) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.style.backgroundColor = "#ff9e00";
                el.style.color = "#000";
                found = true;

                // Limpiar resaltado después de 3 segundos
                setTimeout(() => {
                    el.style.backgroundColor = "";
                    el.style.color = "";
                }, 3000);
            }
        });

        return found;
    }

    // Acción al hacer clic en el botón de búsqueda
    button.addEventListener("click", () => {
        const searchTerm = input.value.trim();
        if (!searchTerm) return;

        const found = searchContent(searchTerm);

        if (!found) {
            alert("No se encontró el término en esta página. Serás redirigido.");
            window.location.href = `../pages/NuestrosProductos.html?query=${encodeURIComponent(searchTerm)}`;
        }
    });

    // Permitir Enter para ejecutar la búsqueda
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            button.click();
        }
    });

    // Si llega una búsqueda desde otra página (?query=...), realizarla al cargar
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    if (query) {
        input.value = query;
        searchContent(query);
    }
});
