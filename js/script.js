function init(){
video = document.getElementById('video')
atrasar = document.getElementById('atrasar')
play = document.getElementById('play')
stop = document.getElementById('stop')
adelantar = document.getElementById('adelantar')
play.addEventListener('click', accion, false)
stop.addEventListener('click', frenar, false)

barraProgreso = document.getElementById('barra')
var ancho = barraProgreso.offsetWidth
indicador = document.getElementById('progreso')
indicador.style.marginLeft = String(-ancho-8)+"px"
barraProgreso.addEventListener('clcik', mover(), false)

}

function accion(){
    if(!video.paused && !video.ended){
        video.pause()
        play.className = "btn-control fas fa-play"
    }else{
        video.play()
        play.className = "btn-control fas fa-pause"
        bucle=setInterval(estado, 1000)
    }
}

function estado(){
    var ancho = barraProgreso.offsetWidth
    if(!video.ended){   
        var prog = video.currentTime / video.duration
        var marg = ancho+8 - (prog*ancho)
        indicador.style.marginLeft = String(-marg)+"px"
    }else{
        indicador.style.marginLeft = String(-ancho-8)+"px"
    }
}

function mover(){
    var e = window.event
    var ratonX=e.pageX-barra.offsetLeft;
    var ancho = barraProgreso.offsetWidth
    var nuevoTiempo=ratonX*video.duration/ancho;
    video.currentTime=nuevoTiempo;
    estado()
    }

function tiempo(mov){
    video.currentTime += mov
}

function frenar(){
    video.currentTime = 0
    play.className = "btn-control fas fa-play"
    video.pause()
}


window.addEventListener('load',init,false);