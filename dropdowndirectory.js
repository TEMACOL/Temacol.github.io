document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    const content = parent.querySelector('.dropdown-content');
    const isActive = parent.classList.contains('active');

    // Cierra todos los menús
    document.querySelectorAll('.dropdown-column').forEach(col => {
      col.classList.remove('active');
      col.querySelector('.dropdown-content').hidden = true;
      col.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });

    // Si no estaba activo, ábrelo
    if (!isActive) {
      parent.classList.add('active');
      content.hidden = false;
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
