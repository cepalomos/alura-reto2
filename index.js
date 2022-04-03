const btnIngresar =document.getElementById("ingresar");

window.onkeyup = (e)=>{
  //console.log(String.fromCharCode(e.keyCode));
}


const palabraSecreta = (arrayPalabras)=>{
  let palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)]
  return palabra;
}

