// Contacto
  window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formContacto").addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("successMessage").classList.remove("d-none");
      this.reset();
    });
  });

// registro
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-registro');
  const mensaje = document.getElementById('mensaje-confirmacion');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita recarga

    // Obtener valores
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmar = document.getElementById('confirmar').value;

    // Validación básica
    if (contrasena !== confirmar) {
      mensaje.style.display = 'block';
      mensaje.classList.remove('text-success');
      mensaje.classList.add('text-danger');
      mensaje.innerHTML = '⚠️ Las contraseñas no coinciden.';
      return;
    }

    // Mostrar mensaje con botón "Aceptar"
    mensaje.style.display = 'block';
    mensaje.classList.remove('text-danger');
    mensaje.classList.add('text-success');
    mensaje.innerHTML = `
      ✅ <strong>Registro exitoso</strong><br>
      <strong>Nombre:</strong> ${nombre}<br>
      <strong>Correo:</strong> ${correo}<br>
      <strong>Teléfono:</strong> ${telefono}<br><br>
      <button id="btn-aceptar" class="btn btn-success mt-2">Aceptar</button>
    `;

    // Agregar evento al botón "Aceptar"
    document.getElementById('btn-aceptar').addEventListener('click', function () {
      window.location.href = '../html/login.html'; // Redirige a inicio.html
    });

    // Opcional: Limpiar el formulario
    form.reset();
  });
});


// Filtros
document.getElementById("filtro-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const palabraClave = document.getElementById("buscar").value.toLowerCase();
  const ram = document.getElementById("ram").value;
  const procesador = document.getElementById("procesador").value;
  const almacenamiento = document.getElementById("almacenamiento").value;
  const precioMaximo = parseFloat(document.getElementById("precio").value);
  const color = document.getElementById("color").value;

  const productos = document.querySelectorAll(".producto");

  productos.forEach(producto => {
    const ramProducto = producto.dataset.ram;
    const procesadorProducto = producto.dataset.procesador;
    const almacenamientoProducto = producto.dataset.almacenamiento;
    const colorProducto = producto.dataset.color;
    const precioProducto = parseFloat(producto.dataset.precio);
    const titulo = producto.querySelector(".card-title").textContent.toLowerCase();

    const coincidePalabraClave = palabraClave === "" || titulo.includes(palabraClave);
    const coincideRam = ram === "" || ramProducto === ram;
    const coincideProcesador = procesador === "" || procesadorProducto === procesador;
    const coincideAlmacenamiento = almacenamiento === "" || almacenamientoProducto === almacenamiento;
    const coincideColor = color === "" || colorProducto === color;
    const coincidePrecio = precioProducto <= precioMaximo;

    if (coincidePalabraClave && coincideRam && coincideProcesador && coincideAlmacenamiento && coincideColor && coincidePrecio) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
});

// Aplicar filtros al cargar la página
aplicarFiltros();

// Login
 // Esperar a que el DOM esté completamente cargado
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("form-login");
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que se recargue la página
        // Aquí puedes validar datos si lo necesitas
        window.location.href = "../index.html"; // Redirige al index (ajusta la ruta si es necesario)
      });
    });