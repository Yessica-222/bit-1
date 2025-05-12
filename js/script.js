// Contacto
  window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formContacto").addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("successMessage").classList.remove("d-none");
      this.reset();
    });
  });