const nombre = "Alex";
const apellido = "Betancourt";

// const nombreCompleto =  nombre + ` ` + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo(nombre) {
  return `Hola ${nombre}`
}
console.log( ` Estos es un texto: ${getSaludo(nombre)} ` );