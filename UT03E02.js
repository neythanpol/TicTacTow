// Una aplicación práctica de los arrays es representar un tablero bidimensional. En este ejercicio vamos a implementar un tres en raya para dos jugadores. 

// Dado que aún no hemos visto cómo interactuar con el usuario desde la página web o actualizar elementos del DOM, la entrada se hará usando la función prompt, y la salida mediante alert o console.log
// Vamos a empezar con dos jugadores humanos en esta práctica. En el index.html puedes hacer un esquema del tablero con coordenadas (vale con 1, 2, 3 ... 9) para que los usuarios puedan saber cómo se llama cada casilla. Al empezar, el tablero está vacío. Cada usuario introduce en su turno la coordenada de la casilla donde colocan la ficha (X o O).
// Hay que comprobar si la casilla está libre o no, si hay tres en raya, o si el tablero está lleno sin tres en raya (tablas)
// Piensa en qué habrá que hacer distinto en caso de que queramos programar el segundo jugador, bonus points si tu código permite añadir este código sin grandes cambios ;-) (nota: no hace falta programar el segundo jugador, sólo pensar en cómo modificar nuestro código para que, por ejemplo, lo pueda implementar otra persona)

let ganador = null;

let turno = 'X';
let cont = 0;

while(cont <= 9){
    casilla = prompt('Le toca al jugador '+ turno);
    celda = document.getElementById(casilla);
    let cambiarTurno = pintarXuO(celda);
    if (cambiarTurno === true){
        if (comprobarGanador(turno)) {
            alert('Enhorabuena jugador '+turno+' has ganado la partida');
            break;
        }
            turno = (turno === 'X') ? 'O' : 'X';
            cont++;
    }
}

function comprobarGanador(simbolo){
    let combinacionesGanadoras = [
        // Horizontales
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        // Verticales
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        // Diagonales
        ['0', '4', '8'],
        ['2', '4', '6']
    ]

    for (let combinacion of combinacionesGanadoras) {
        if (document.getElementById(combinacion[0]).innerText === simbolo && document.getElementById(combinacion[1]).innerText === simbolo && document.getElementById(combinacion[2]).innerText === simbolo) {
            return true;
        }
    }
    return false;
}


function pintarXuO(celda){
    if (celda.innerText != '') {
        alert('Repite en una celda vacía');
        return false;
    }else{
        if (turno === 'X') {
            celda.innerText = 'X';
        }else{
            celda.innerText = 'O';
        }
        return true;
    }
}