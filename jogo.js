
var alt = 0
var larg = 0

function ajustaTela()  {
    alt = window.innerHeight
    larg = window.innerWidth
     
    console.log(alt, larg)
}

ajustaTela()

function positionRandom() {
var posicaox = Math.floor(Math.random() * larg) - 90
var posicaoy = Math.floor(Math.random() * alt) - 90

posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy < 0 ? 0 : posicaoy

console.log(posicaox, posicaoy)

var mosquito = document.createElement('img')
mosquito.src = 'assets/imagens/mosca.png'
mosquito.className='mosquito'
mosquito.style.left = posicaox + 'px'
mosquito.style.top = posicaoy + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)
}