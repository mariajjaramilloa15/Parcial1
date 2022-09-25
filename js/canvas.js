function canvas() {
  c = document.getElementById("Canvas"); //Capturo el canvas del html
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  DrawCirculo(c);
}

function DrawCirculo(c) {
  var ctx = c.getContext("2d"); //graficos en 2D
  ctx.beginPath(); // Inicializar el entorno para el grafico
  //para dibujar el circulo, llamado arc, parametros x, y, angulo inicial y final

  ctx.arc(
    window.innerWidth / 2,
    window.innerHeight / 2,
    300,
    0,
    (Math.PI / 180) * 360,
    false
  );
  ctx.stroke(); // prepara el entorno "pincel"
  Color(ctx, "#FFF9F5");
  Bordercolor(ctx);
  Texto(ctx);
  ojos(ctx, innerWidth / 2 - 100, innerHeight / 2 - 100, 50);
  ojos(ctx, innerWidth / 2 + 100, innerHeight / 2 - 100, 50);

  //cornea
  ojos(ctx, innerWidth / 2 - 100, innerHeight / 2 - 100, 4);
  Color(ctx, "#000000");
  ojos(ctx, innerWidth / 2 + 100, innerHeight / 2 - 100, 4);
  Color(ctx, "#000000");

  //nariz
  nariz(ctx, innerWidth / 2 + 10, innerHeight / 2 - 20, 10);

  //boca
  boca(ctx, innerWidth / 2 + 100, innerHeight / 2 - 100, 4);
}

function Color(c, tono) {
  c.fillStyle = tono; //pone el color
  c.fill(); //lo pinta de color
}

function Bordercolor(c) {
  screen.strokeStyle = "#f00"; //color del borde
  c.lineWidth = 4;
  c.stroke();
}

function Texto(c) {
  c.font = "30px Arial";
  c.fillText("Grafico", innerWidth / 2 + 350, innerHeight / 2);
}

function ojos(c, x, y, radio) {
  c.beginPath();
  c.arc(x, y, radio, 0, (Math.PI / 180) * 360, false);
  c.stroke();
}

function nariz(c, x, y, radio) {
  c.beginPath();
  c.arc(x, y, radio, 0, (Math.PI / 180) * 360, false);
  c.stroke();
}

function boca(c) {
  c.beginPath();
  c.arc(345, 400, 70, 0, Math.PI, false);
  c.stroke();
}
