// const textUsadas = document.getElementById("letraUsadas");
const finalizacion = document.getElementById("finalizacion");
const contenedorCanvas = document.getElementById("tutorial");
const contUsadas = document.getElementById("acumular-letras");
const contBoton = document.getElementById("contenedor-boton");
let palabras = ["carruaje", "mecanico", "programacion", "lenguaje"];

// btnIngresar.addEventListener("click",(e)=>{
//   e.preventDefault();
//   contBoton.classList.toggle("oculto");
//   contUsadas.classList.remove("oculto");
//   contenedorCanvas.classList.remove("oculto");
//   finalizacion.classList.remove("oculto");
// });
console.log(contUsadas.value);
let letrasUsadas = "";
let palabraEscogida = palabraSecreta(palabras).toUpperCase();
console.log(palabraEscogida);
window.onkeyup = (e) => {
  //console.log(String.fromCharCode(e.keyCode));
  let code = e.keyCode;
  if (!(code > 64 && code < 91)) return alert("no es una letra");
  else {
    let letra = String.fromCharCode(code);
    if (letrasUsadas.includes(letra)) return alert("Ya usaste esa letra");
    else if (!palabraEscogida.includes(letra)) {
      letrasUsadas = `${letrasUsadas} ${letra}`;
      contUsadas.innerHTML = letrasUsadas;
    }
  }
};

function palabraSecreta(arrayPalabras) {
  const ramdon = Math.floor(Math.random() * arrayPalabras.length);
  let palabra = arrayPalabras[ramdon];
  return palabra;
}
