export function validarNombre(nombre) {
  return typeof nombre === 'string' && nombre.trim().length >= 3;
}

export function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim());
}

export function validarTelefono(telefono) {
  return /^\d{10}$/.test(telefono.trim());
}

export function validarTextoObligatorio(texto, minimo = 4) {
  return typeof texto === 'string' && texto.trim().length >= minimo;
}

export function obtenerDatosFormulario(form) {
  return Object.fromEntries(new FormData(form).entries());
}

export function marcarFormulario(form, esValido) {
  form.classList.add('was-validated');
  if (!esValido) {
    const primerCampoInvalido = form.querySelector(':invalid');
    primerCampoInvalido?.focus();
  }
}

// TODO ESTUDIANTE OPCIONAL:
// Agrega una validacion extra para impedir comentarios ofensivos o demasiado cortos.
// Luego registra la prueba en docs/bitacora-validacion.md.
