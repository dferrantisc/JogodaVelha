/*alert("Teste");

const socket = io();*/

const jogador1 = "X";
const jagador2 = "O";

var vezjogo = jogador1;
var fimjogo = false;

var vez = 1;
var vencedor = "";

updatVez();
initCasa();

casasIguais();
verificarFimDeJogo();

function updatVez() {
  if (fimjogo) {
    return;
  }

  if (vezjogo == jogador1) {
    var play = document.querySelectorAll("div#view img")[0];
    play.setAttribute("src", "imgs/errado.png");
  } else {
    var play = document.querySelectorAll("div#view img")[0];
    play.setAttribute("src", "imgs/rec.png");
  }
}

function initCasa() {
  var casa = document.getElementsByClassName("casa");
  for (var i = 0; i < casa.length; i++) {
    casa[i].addEventListener("click", function () {
      if (fimjogo) {
        return;
      }
      if (this.getElementsByClassName("img").length == 0) {
        if (vezjogo == jogador1) {
          this.innerHtml = "<img src='imgs/errado.png'>";
          this.setAttribute("p");
        } else {
        }
      }
    });
  }
}

function casasIguais(a, b, c) {
  var casaA = $("#casa" + a);
  var casaB = $("#casa" + b);
  var casaC = $("#casa" + c);
  var bgA = $("#casa" + a).css("background-image");
  var bgB = $("#casa" + b).css("background-image");
  var bgC = $("#casa" + c).css("background-image");
  if (bgA == bgB && bgB == bgC && bgA != "none" && bgA != "") {
    if (bgA.indexOf("1.png") >= 0) vencedor = "1";
    else vencedor = "2";
    return true;
  } else {
    return false;
  }
}

function verificarFimDeJogo() {
  if (
    casasIguais(1, 2, 3) ||
    casasIguais(4, 5, 6) ||
    casasIguais(7, 8, 9) ||
    casasIguais(1, 4, 7) ||
    casasIguais(2, 5, 8) ||
    casasIguais(3, 6, 9) ||
    casasIguais(1, 5, 9) ||
    casasIguais(3, 5, 7)
  ) {
    $("#resultado").html("<h1>O jogador " + vencedor + "venceu! </h1>");
    $(".casa").off("click");
  }
}

$(".casa").click(function () {
  var bg = $(this).css("background-image");
  if (bg == "none" || bg == "") {
    var fig = "url(" + vez.toString() + ".png)";
    $(this).css("background", fig);
    vez = vez == 1 ? 2 : 1;
    verificarFimDeJogo();
  }
});
