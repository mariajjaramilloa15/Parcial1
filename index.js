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
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
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
