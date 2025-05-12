// Contacto
  window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formContacto").addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("successMessage").classList.remove("d-none");
      this.reset();
    });
  });

// registro
document.getElementById('form-registro').addEventListener('submit', function (event) {
      event.preventDefault();

      // Mostrar mensaje
      const mensaje = document.getElementById('mensaje-confirmacion');
      mensaje.style.display = 'block';

      // Limpiar formulario
      this.reset();

      // Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        mensaje.style.display = 'none';
      }, 3000);
    });