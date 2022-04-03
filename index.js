var canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(50, 280, 100, 20); //primer dibujo base
  ctx.fillRect(90, 280, 20, -200); //segundo palo subiendo
  ctx.fillRect(90, 80, 100, -20); //tercer palo lateral
  ctx.fillRect(190,80,-2,30);//cuerda
  ctx.beginPath();//comienzo de circulo
  ctx.arc(189,130,20,0,Math.PI*2,true);
  ctx.fill();//termina circulo
  ctx.fillRect(188,150,2,50);
  ctx.moveTo(189,200);//comienzo de pierna
  ctx.lineTo(174,226);
  ctx.lineTo(174,224);
  ctx.lineTo(187,200);
  ctx.closePath();
  ctx.fill();//termina pierna izq
  ctx.moveTo(189,200);//pierna derecha
  ctx.lineTo(204,226);
  ctx.lineTo(204,224);
  ctx.lineTo(191,200);
  ctx.closePath();
  ctx.fill();//termina pierna derecha
  ctx.moveTo(189,150);//brazo izquierdo
  ctx.lineTo(174,176);
  ctx.lineTo(174,174);
  ctx.lineTo(187,150);
  ctx.closePath();
  ctx.fill();//fin de brazo izquierdo
  ctx.moveTo(189,150);//brazo derecho
  ctx.lineTo(204,176);
  ctx.lineTo(204,174);
  ctx.lineTo(191,150);
  ctx.closePath();
  ctx.fill();//fin de brazo derecho
} else {
  // canvas-unsupported code here
}

function cuadrado(parametro) {
  parametro.clearRect(45, 45, 60, 60);
  parametro.strokeRect(50, 50, 50, 50);
}

const palabraSecreta = (arrayPalabras)=>{
  let palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)]
  return palabra;
}

