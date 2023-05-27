var alt = 0;
var larg = 0;
var vidas = 1
var tempo = 5

function ajustaTela() {
  alt = window.innerHeight;
  larg = window.innerWidth;

  console.log(alt, larg);
}

ajustaTela();

var cronometro = setInterval(function() {

  tempo -= 1
  if(tempo < 0){
     clearInterval(cronometro)
     clearInterval(criaMosquito)
     window.location.href = "./fim_de_jogo.html"
  } else {
  document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)

function positionRandom() {
  //removendo mosquito caso exista
  if (document.getElementById('mosquito')) {
      document.getElementById('mosquito').remove()

      if(vidas > 3) {
        window.location.href = "./victory.html"
      }else {
      document.getElementById('v' + vidas).src = "./assets/imagens/coracao_vazio.png"
      vidas++
      }
  }

  var posicaoX = Math.floor(Math.random() * larg) - 90;
  var posicaoY = Math.floor(Math.random() * alt) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  var mosquito = document.createElement("img");
  mosquito.src = "assets/imagens/mosca.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function() {
    this.remove(mosquito)
  }

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito";

    case 1:
      return "mosquito2";

    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoa";

    case 1:
      return "ladob";
  }
}
