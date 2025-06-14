document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
      // Cierra todas las columnas activas
      document.querySelectorAll('.dropdown-column.active').forEach(active => {
        if (active !== button.parentElement) {
          active.classList.remove('active');
        }
      });

      // Alterna la columna actual
      button.parentElement.classList.toggle('active');
    });
  });