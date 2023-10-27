const nuevoJuego = document.getElementById("nuevo-juego");

const juegoFacil = document.getElementById("modo-facil");
const juegoDificil = document.getElementById("modo-dificil");

const coloresGenerar = document.querySelectorAll(".colores");

const contenedorFacil = document.getElementById("contenedor-colores");
const contenedorDificil = document.getElementById("contenedor-colores2");

const colorAdivinarTitulo = document.getElementById("color-adivinar");

const colorAdivinar = document.querySelectorAll(".colores");

const empezarJuego = document.getElementById("nuevo-juego");

var colorRGB = "";
var listaColores = [];
var juegoModoFacil = true;
var colorAcierto;
var contador = 0;


function generarColores() {
    var rgb1 = Math.floor(Math.random() * 256);
    var rgb2 = Math.floor(Math.random() * 256);
    var rgb3 = Math.floor(Math.random() * 256);
    colorRGB = "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";
    listaColores.push(colorRGB);
    return colorRGB;
}

function generarColorAciertoFacil() {
    var indice = Math.floor(Math.random() * 3)
    colorAcierto = listaColores[indice];
    
    return colorAcierto;
}

function generarColorAciertoDificil() {
    var indice = Math.floor(Math.random() * 6)
    colorAcierto = listaColores[indice];
    
    return colorAcierto;
}

nuevoJuego.addEventListener("click", () => {
    coloresGenerar.forEach((colores) => {
        generarColores();
        if(juegoModoFacil){
            colorAdivinarTitulo.innerHTML = generarColorAciertoFacil();
        }else {
            colorAdivinarTitulo.innerHTML = generarColorAciertoDificil();
        }

        colores.style.backgroundColor = colorRGB
        
    });
    listaColores = [];
    
    empezarJuego.innerHTML = "Jugar de nuevo";

    if(juegoModoFacil) {
        for(let i = 3; i < 6;i++) {
            colorAdivinar[i].style.visibility = "hidden";
        }
        for(let i = 0; i < 3;i++) {
            colorAdivinar[i].style.visibility = "visible";
        }
    }else {
        for(let i = 0; i < 6;i++) {
            colorAdivinar[i].style.visibility = "visible";
        }
    }
});

juegoFacil.addEventListener("click", () => {
    for(i = 3; i < 6;i++) {
        colorAdivinar[i].style.visibility = "hidden";
    }
    juegoModoFacil = true;

})

juegoDificil.addEventListener("click", () => {
    for(i = 3; i < 6;i++) {
        colorAdivinar[i].style.visibility = "visible";
    }
    juegoModoFacil = false;
})

colorAdivinar.forEach((adivinar) => {
    adivinar.addEventListener("click",(e) => {
        if(e.target.style.backgroundColor == colorAcierto){
            alert("Has ganado");
                if(juegoModoFacil) {
                    for(let i = 0;i < 3;i++) {
                        colorAdivinar[i].style.backgroundColor = colorAcierto;
                        colorAdivinar[i].style.visibility = "visible";
                    }
                    for(let i = 3;i < 6;i++) {
                        colorAdivinar[i].style.visibility = "hidden";
                    }

                }else {
                    for(let i = 0;i < 6;i++) {
                        colorAdivinar[i].style.backgroundColor = colorAcierto;
                        colorAdivinar[i].style.visibility = "visible";
                    }
                }
                
        }else {
            adivinar.style.visibility = "hidden";
        }
    })
})







