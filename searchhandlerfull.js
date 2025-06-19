document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("globalSearchInput");
  const button = document.getElementById("globalSearchBtn");

  function searchContent(term) {
    const textElements = document.querySelectorAll("h1, h2, h3, p, li, span, a");
    let found = false;

    textElements.forEach((el) => {
      if (el.textContent.toLowerCase().includes(term.toLowerCase())) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.backgroundColor = "#ff9e00";
        el.style.color = "#000";
        found = true;

        setTimeout(() => {
          el.style.backgroundColor = "";
          el.style.color = "";
        }, 3000);
      }
    });

    return found;
  }

  function handleSearch(term) {
    const found = searchContent(term);

    if (!found) {
      fetch("../data/busqueda.json")
        .then(res => res.json())
        .then(index => {
          const page = index[term.toLowerCase()];
          if (page) {
            window.location.href = `../pages/${page}?query=${encodeURIComponent(term)}`;
          } else {
            alert("No se encontró el término en ninguna página.");
          }
        })
        .catch(() => {
          alert("Error al acceder al índice de búsqueda.");
        });
    }
  }

  if (button && input) {
    button.addEventListener("click", () => {
      const searchTerm = input.value.trim();
      if (searchTerm) handleSearch(searchTerm);
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        button.click();
      }
    });

    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    if (query) {
      input.value = query;
      searchContent(query);
    }
  }
});
