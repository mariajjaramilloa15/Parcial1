// Array de palabraspalabra
/* var pal = document.getElementById("pal"); */
//var palabras = pal.split(""); [["atlantico", "Un océano"], ["ordenador", "Una máquina"],  ["carrera", "Competición"], ["martillo", "Herramienta"], ["universidad","Institución"]]; */
// Palabra a averiguar
var pal = document.getElementById("pal").value;

/* var palabra = pal.toUpperCase(); */
let palabra = pal.toUpperCase().split("");
// Nº aleatorio
var rand;
// Palabra oculta
var oculta = [];
// Elemento html de la palabra
var hueco = document.getElementById("palabra");
// Contador de intentos
var cont = 5;
// Botones de letras
var buttons = document.getElementsByClassName("letra");
// Boton de reset
//var btnInicio = document.getElementById("reset");

/* var palabra = document.getElementById("pal"); */

// ### FUNCIONES ###

// Escoger palabra al azar
/* function generaPalabra(palabra) {
  palabra = palabra.toUpperCase();
  console.log(palabra);
} */

// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerHTML = oculta.join("");
}

/* function DePalabraAArreglo(){ 
    let oculta = [];
    let hueco = document.getElementById("huecos");
    let palabra = document.getElementById("pal").value;
    let n = palabra.length;
    let arr = palabra.split("");

   pintarGuiones(n,oculta,hueco); 
   generaABC("a","z",oculta, arr);
   let cont = 5;
   document.getElementById("intentos").innerHTML=cont;
   console.log(palabra);
    console.log(arr);
    /* console.log(n); */

//Generar abecedario
function generaABC(a, z) {
  document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0),
    j = z.charCodeAt(0);
  var letra = "";
  for (; i <= j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML +=
      "<button value='" +
      letra +
      "' onclick='intento(\"" +
      letra +
      "\")' class='letra' id='" +
      letra +
      "'>" +
      letra +
      "</button>";
    if (i == 110) {
      document.getElementById("abcdario").innerHTML +=
        "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='" +
        letra +
        "'>Ñ</button>";
    }
  }
}

// Chequear intento
function intento(letra) {
  var pal = document.getElementById("pal").value;

  /* var palabra = pal.toUpperCase(); */
  let palabra = pal.toUpperCase().split("");
  document.getElementById(letra).disabled = true;
  if (palabra.indexOf(letra) != -1) {
    for (var i = 0; i < palabra.length; i++) {
      if (palabra[i] == letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "Bien!";
    document.getElementById("acierto").className += "acierto verde";
  } else {
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("cabeza").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
    
    document.getElementById("Canvas").innerHTML = DrawCirculo;
    //document.getElementById("image"+cont).className += "fade-in";
  }
  compruebaFin();
  setTimeout(function () {
    document.getElementById("acierto").className = "";
  }, 800);
}

// Obtener pista
/* function pista() {
  document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
} */

// Compruba si ha finalizado
function compruebaFin() {
  if (oculta.indexOf("_") == -1) {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () {
      location.reload();
    };
  } else if (cont == 0) {
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () {
      location.reload();
    };
  }
}

// Restablecer juego
function inicio() {
  let palabra = document.getElementById("pal").value;
  palabra.toUpperCase();
  /* generaPalabra(); */
  console.log(palabra);

  let arr = palabra.toUpperCase().split("");
  n = arr.length;
  pintarGuiones(n);
  generaABC("a", "z");
  cont = 5;
  document.getElementById("intentos").innerHTML = cont;
}

// Iniciar
window.onload = inicio();


//INTENTO DE CANVAS

var Ahorcado = function(con)
{
  //this es las variables locales de la clase, accesibles en toda la clase
  //this.contexto es el context de dibujo del canvas, que llega por parametro
  //desde la variable con
  this.contexto = con;
  this.maximo = 7;
  this.intentos = 0;
  this.vivo = true;

  this.dibujar();
}
Ahorcado.prototype.dibujar = function()
{

  var dibujar = this.contexto
  
  // Poste
  dibujar.beginPath();
  dibujar.poste = new Image();
  dibujar.poste.src = "palo.png";
  dibujar.poste.onload = dibujoPost;
  function dibujoPost()
  {
    dibujar.drawImage(dibujar.poste, 160, 0);
  }
  dibujar.closePath();

  if(this.intentos > 0)
  {
    // Rostro
    dibujar.beginPath();
    dibujar.cabeza = new Image();
    dibujar.cabeza.src = "cabeza-android.png";
    dibujar.cabeza.onload = dibujoCab;
    function dibujoCab()
    {
      dibujar.drawImage(dibujar.cabeza, 220, 30);
    }
    dibujar.closePath();

    if(this.intentos > 1)
    {
      // Cuerpo
      dibujar.beginPath();
      dibujar.cuerpo = new Image();
      dibujar.cuerpo.src = "cuerpo-android.png";
      dibujar.cuerpo.onload = dibujoCuerp;
      function dibujoCuerp()
      {
        dibujar.drawImage(dibujar.cuerpo, 220, 100);
      }
      dibujar.closePath();

      if(this.intentos > 2) 
      {
        // Brazo derecho
        dibujar.beginPath();
        dibujar.brazo1 = new Image();
        dibujar.brazo1.src = "brazo-derecho.png";
        dibujar.brazo1.onload = dibujoBrazoDer;
        function dibujoBrazoDer()
        {
          dibujar.drawImage(dibujar.brazo1, 190, 110);
        }
        dibujar.closePath();

        if(this.intentos > 3)
        {
          // Brazo izquierdo
          dibujar.beginPath();
          dibujar.brazo2 = new Image();
          dibujar.brazo2.src = "brazo-izquierdo.png";
          dibujar.brazo2.onload = dibujoBrazoIzq;
          function dibujoBrazoIzq()
          {
            dibujar.drawImage(dibujar.brazo2, 330, 110);
          }
          dibujar.closePath();

          if(this.intentos > 4)
          {
            // Pierna derecha
            dibujar.beginPath();
            dibujar.pierna1 = new Image();
            dibujar.pierna1.src = "pierna-derecha.png";
            dibujar.pierna1.onload = dibujoPiernaDer;
            function dibujoPiernaDer()
            {
              dibujar.drawImage(dibujar.pierna1, 230, 200);
            }
            dibujar.closePath();

            if(this.intentos > 5)
            {
              // Pierna izquierda
              dibujar.beginPath();
              dibujar.pierna2 = new Image();
              dibujar.pierna2.src = "pierna-izquierda.png";
              dibujar.pierna2.onload = dibujoPiernaIzq;
              function dibujoPiernaIzq()
              {
                dibujar.drawImage(dibujar.pierna2, 285, 200);
              }
                dibujar.closePath();
            }
          }
        }
      }
    }
  }
} 
