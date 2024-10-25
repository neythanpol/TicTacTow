"use strict";

const CASILLAS_VALIDAS = ['1', '2', '3', '4', '5', '6', '7', '8', '9',]
const FICHAS = ['X', 'O'];


const FILA_IZQUIERDA = [1, 4, 7];
const FILA_DERECHA = [3, 6, 9];
const DIAGONAL_PRINCIPAL = [1, 5, 9];
const DIAGONAL_SECUNDARIA = [3, 5, 7];

let victoria = false;
let tablas = false;

let turnoActual = 0;

function comprobarCasillaValida(casilla) {
    let contenido = casilla.textContent;
    return CASILLAS_VALIDAS.includes(contenido);
}

function ejecutarTurno() {
    casilla.textContent = FICHAS[turno % 2];
    turno++;
}

function comprobarTablas() {
    if (turnoActual == 9 && !victoria) {
        tablas = true;
    }
}

function comprobarHorizontal(){
    
}

function comprobarVertical(){

}

function comprobarDiagonalPrincipal(){

}

function comprobarDiagonalSecundaria(){
    
}


function comprobarFinDeJuego(casilla) {
    const numeroCasilla = casilla.textContent;

    comprobarHorizontal(numeroCasilla);
    comprobarVertical(numeroCasilla);
    if (DIAGONAL_PRINCIPAL.includes(numeroCasilla)) {
        comprobarDiagonalPrincipal(numeroCasilla);
    }
    if (DIAGONAL_SECUNDARIA.includes(numeroCasilla)) {
        comprobarDiagonalSecundaria(numeroCasilla);
    }
}

function casillaOnClick(event) {
    let casilla = event.target;
    console.log('click en casilla ' + casilla.textContent);

    if (comprobarCasillaValida(casilla)) {
        ejecutarTurno(casilla);
    }
}


// Si creo una función que voy a usar inmediatamente después, la llamo con ()
// (function main() {
// })();

function main() {
    for (let i = 1; i <= 9; i++) {
        // Se pueden usar las dos
        let casilla = document.getElementById(/*"casilla-" + i.toString()*/`casilla-${i}`);
      //let casilla = document.querySelector(`#casilla-${i}`);
        casilla.addEventListener('click', casillaOnClick);
    }
}

main();