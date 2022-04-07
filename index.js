const finalizacion = document.getElementById("finalizacion");
const contenedorCanvas = document.getElementById("tutorial");
const contUsadas = document.getElementById("acumular-letras");
const contBoton = document.getElementById("contenedor-boton");
const lineasPalabra = document.getElementById("palabra");
let palabras = ["carruaje", "mecanico", "programacion", "lenguaje"];
let contador = 0;
let conteoPalabra = 0;
let letrasCorrectas = "";
let letrasUsadas = "";

let palabraEscogida = palabraSecreta(palabras).toUpperCase();
conteoPalabra = palabraEscogida.length;
generarLineas(conteoPalabra);
let lista = document.querySelectorAll(".palabra-lista-elemento");

window.onkeyup = (e) => {
  let code = e.keyCode;
  if (!(code > 64 && code < 91)) return alert("no es una letra");
  else {
    let letra = String.fromCharCode(code);
    if (letrasUsadas.includes(letra) || letrasCorrectas.includes(letra))
      return alert("Ya usaste esa letra");
    else if (!palabraEscogida.includes(letra)) {
      letrasUsadas = `${letrasUsadas} ${letra}`;
      contUsadas.innerHTML = letrasUsadas;
      contador++;
      generadorCanvas(contador);
      if (contador === 7) {
        finalizacion.innerHTML = `Perdiste la palabra era ${palabraEscogida.toLowerCase()}`;
      }
    } else {
      letrasCorrectas = `${letrasCorrectas}${letra}`;
      for (let i = 0; i < palabraEscogida.length; i++) {
        if (palabraEscogida[i] === letra) {
          lista[i].textContent = letra;
          conteoPalabra--;
        }
      }
      if (!conteoPalabra) {
        finalizacion.innerHTML = "Ganaste Muchas Felicidades";
      }
    }
  }
};

function palabraSecreta(arrayPalabras) {
  const ramdon = Math.floor(Math.random() * arrayPalabras.length);
  let palabra = arrayPalabras[ramdon];
  return palabra;
}
function generarLineas(num) {
  for (let i = 0; i < num; i++) {
    let li = document.createElement("li");
    li.classList.add("palabra-lista-elemento");
    li.textContent = " ";
    lineasPalabra.appendChild(li);
  }
}
