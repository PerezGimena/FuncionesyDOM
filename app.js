//datos del formulario
function obtenerDatos() {
  return {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    edad: document.getElementById("edad").value,
    password: document.getElementById("password").value,
    fecha: document.getElementById("fecha").value,
    telefono: document.getElementById("telefono").value,
    genero: document.getElementById("genero").value,
    terminos: document.getElementById("terminos").checked
  };
}

// creo la funcion de enviar datos
function enviarFormulario() {
  const datos = obtenerDatos();
  console.log("Datos del formulario:", datos);

  if (
    !datos.nombre || !datos.email || !datos.edad || !datos.password ||
    !datos.fecha || !datos.telefono || !datos.genero || !datos.terminos
  ) {
    alert(" Todos los campos son obligatorios");
    return;
  } 
  
  const emailInput = document.getElementById("email");
  if (!emailInput.checkValidity()) {
    alert("⚠️ Email inválido");
    return;
  }
    // guardar datos en local
  localStorage.setItem("formularioDatos", JSON.stringify(datos));

    // mensaje de alerta 
    alert(" Sus datos fueron enviados correctamente");
  }
function imprimirPagina() {
  window.print();
}