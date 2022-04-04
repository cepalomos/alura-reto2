const canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(50, 280, 100, 20); //primer dibujo base
  ctx.fillRect(90, 280, 20, -200); //segundo palo subiendo
  ctx.fillRect(90, 80, 100, -20); //tercer palo lateral
} else {
  alert("tu navegador no soporta la api canvas");
}
const ctx = canvas.getContext("2d");

function generadorCanvas(contador) {
  switch (contador) {
    case 1:
      ctx.fillRect(190, 80, -2, 30); //cuerda
      break;
    case 2:
      ctx.beginPath(); //comienzo de circulo
      ctx.arc(189, 130, 20, 0, Math.PI * 2, true);
      ctx.fill(); //termina circulo
      break;
    case 3:
      ctx.fillRect(188, 150, 2, 50); //cuerpo de elemento
      break;
    case 4:
      ctx.moveTo(189, 200); //comienzo de pierna
      ctx.lineTo(174, 226);
      ctx.lineTo(174, 224);
      ctx.lineTo(187, 200);
      ctx.closePath();
      ctx.fill(); //termina pierna izq
      break;
    case 5:
      ctx.moveTo(189, 200); //pierna derecha
      ctx.lineTo(204, 226);
      ctx.lineTo(204, 224);
      ctx.lineTo(191, 200);
      ctx.closePath();
      ctx.fill(); //termina pierna derecha
      break;
    case 6:
      ctx.moveTo(189, 150); //brazo izquierdo
      ctx.lineTo(174, 176);
      ctx.lineTo(174, 174);
      ctx.lineTo(187, 150);
      ctx.closePath();
      ctx.fill(); //fin de brazo izquierdo
      break;
    case 7:
      ctx.moveTo(189, 150); //brazo derecho
      ctx.lineTo(204, 176);
      ctx.lineTo(204, 174);
      ctx.lineTo(191, 150);
      ctx.closePath();
      ctx.fill(); //fin de brazo derecho
      break;
    default:
      console.log("Perdiste");
  }
}
