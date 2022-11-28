const nombre = "Juan";
const apellido = "Antonio";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre) {
  return "Hola " + nombre;
}
