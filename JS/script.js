
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

// let inputArray = ['basketallegrini@gmail.com', 'alessio.allegrinia@gmail.com', 'a.allegrini2@gmail.com']
// let inputEmail = prompt('inserisci la tua mail:')


// if (inputArray.includes(inputEmail)){
//     console.log('email presente')
// } else {
//     console.log('email NON presente')
// }



//soluzione con il FOR (che non restituisce nulla se la mail non ne fa parte)

// let inputArray2 = ['basketallegrini@gmail.com', 'alessio.allegrinia@gmail.com', 'a.allegrini2@gmail.com']
// let inputEmail2 = prompt('inserisci la tua mail:')

// for ( let i = 0; i < inputArray2.length ; i++) {

//     if (inputEmail2 === inputArray2[i]){
//         console.log ('email presente')
//     } 

//     // else {
//     //     console.log('email NON presente')
//     // }
// }


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

// let computer = [1,2,3,4,5,6]
// let player = [1,2,3,4,5,6]

function computer(max) {
    return Math.floor(Math.random() * max);
}
function player(max) {
    return Math.floor(Math.random() * max);
}

// computer
console.log(computer(7));

// player 
console.log(player(7));

if ( console.log(computer) > console.log(player)) {
    console.log ('ha vinto il player')
} else {
    console.log ('ha vinto il pc')
}
    



