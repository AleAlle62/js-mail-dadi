
/*
ES 1
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/
/*
PROCEDIMENTO ES 1

. con prompt chiedere una mail
. scorrere l'array ogni elemento verificando se corrisponde alla mail inserita
. se corrispode dire SI, altrimenti NO

*/


//soluzione con INCLUDES

let inputArray = ['basketallegrini@gmail.com', 'alessio.allegrinia@gmail.com', 'a.allegrini2@gmail.com']
let inputEmail = prompt('inserisci la tua mail:')


if (inputArray.includes(inputEmail)){
    console.log('email presente')
} else {
    console.log('email NON presente')
}


/*
ES 2

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/
/*
PROCEDIMENTO ES 2

. creare due giocatori
. creare un numero a caso da 1 a 6 per ogniuno
. se uno è > o < dell'altro vince

*/

// /*

function computer(max) {
    return Math.floor(Math.random(1) * max);
}
function player(max) {
    return Math.floor(Math.random(2) * max);
}

// computer
console.log('il PC ha fatto:' + computer(7));

// player 
console.log('il PLAYER ha fatto:' + player(7));


if ( Math.random(2) === Math.random(1)){
    console.log('pareggio')
} else if ( Math.random(2) > Math.random(1)){
    console.log('quindi ha vinto il PLAYER')
} else {
    console.log('quindi ha vinto il PC')
}

// */

