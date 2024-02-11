document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contacto-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío por defecto del formulario.
  
      var nombres = document.getElementById('nombres').value.trim();
      var apellidos = document.getElementById('apellidos').value.trim();
      var email = document.getElementById('email').value.trim();
      var servicio = document.getElementById('servicio').value;
      
      var camposCompletos = nombres !== '' && apellidos !== '' && email !== '' && servicio !== '';
      var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Expresión regular para validar el email.
  
      if(camposCompletos && emailValido) {
        // Si la validación es exitosa, redirigir a 'gracias.html'.
        window.location.href = 'gracias.html';
        alert("Gracias por tu registro " + nombres + apellidos ,"!")
      } else {
        // Si la validación falla, mostrar un mensaje de error.
        alert('Por favor, completa todos los campos con información válida.');
      }
    });
  });
  